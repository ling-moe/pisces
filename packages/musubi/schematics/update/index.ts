import { logging } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { without } from 'lodash';
import {
  createConsumerFromInterface,
  createImportClauseNodeText,
  createImportNodeText,
  createProviderFromInterface,
  createTypeAliasDeclarationText,
  getInterfaceName,
} from './statement.util';

// 目标目录
const root = './src/lib/';
const remoteDir = 'remote/';
const consumerDir = 'consumer/';
const providerDir = 'provider/';
const types = 'musubi.types.ts';

export function update(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // 扫描出符合要求的的文件
    const filePaths = tree
      .getDir(root + remoteDir)
      .subfiles.filter((file) => file.endsWith('.remote.ts'));
    for (const filePath of filePaths) {
      // 读取文件内容
      const sourceFile = convertSourceFile(tree, root + remoteDir + filePath);
      // 查找interface节点
      const interfaceNodes = findInterfaceDeclarations(sourceFile);
      // 创建consumer
      createConsumer(tree, interfaceNodes);
      // 创建provider
      createProvider(tree, interfaceNodes);
      // 追加类型
      const typesFile = convertSourceFile(tree, root + types);
      appendType(
        tree,
        filePath,
        root + types,
        typesFile,
        interfaceNodes,
        context.logger
      );
    }
    return tree;
  };
}

function convertSourceFile(tree: Tree, filePath: string) {
  const fileContent = tree.read(filePath);
  if (!fileContent) {
    throw new Error(`File "${filePath}" not found.`);
  }
  // 解析文件为 TypeScript AST
  const sourceFile = ts.createSourceFile(
    filePath,

    fileContent.toString(),
    ts.ScriptTarget.Latest,
    true
  );
  return sourceFile;
}

function appendType(
  tree: Tree,
  filePath: string,
  typesFilePath: string,
  typesFile: ts.SourceFile,
  interfaceNodes: ts.InterfaceDeclaration[],
  logger: logging.LoggerApi
) {
  const fileAllPath = root + remoteDir + filePath;
  // 检查当前remote中的interface在types中是否存在，存在则更新，不存在则新增
  // 根据import处定义检查是否存在并分类
  const imports = findImportDeclarations(typesFile);
  // 检查remote文件是否已经导入
  const importInTypes = imports.find(
    (i) =>
      `./${remoteDir}${filePath.slice(0, -3)}` ===
      i.moduleSpecifier.getText().slice(1, -1)
  );
  // 默认remote为全新创建的，因此为空集合，如果存在则更新
  let namedImportsInTypes: string[] = [];
  if (importInTypes) {
    // 做差集看哪些interface需要加，哪些需要减
    const importClause = importInTypes?.importClause!;
    namedImportsInTypes = (
      importClause.namedBindings as ts.NamedImports
    ).elements.map((e) => e.getText());
  }
  const namedImportsInRemote = interfaceNodes.map((i) => i.name.getText());
  const adds = without(namedImportsInRemote, ...namedImportsInTypes);
  const removes = without(namedImportsInTypes, ...namedImportsInRemote);
  const newNamedImports = without(namedImportsInTypes, ...removes).concat(adds);
  // 使用统一个recorder，要不会发生位置错乱
  const recorder = tree.beginUpdate(typesFilePath);
  // 如果存在，则更新import
  if (importInTypes) {
    const importClause = importInTypes?.importClause!;
    recorder
      .remove(
        importClause.getStart(),
        importClause.getEnd() - importClause.getStart()
      )
      .insertLeft(
        importClause.getStart(),
        // 创建新的named节点
        '\n' + createImportClauseNodeText(newNamedImports)
      );
  } else {
    // 不存在则在最后一个import后追加
    const lastImport = imports.pop();
    recorder.insertLeft(
      lastImport?.getEnd() ?? 0,
      // 创建新import节点
      '\n' +
        createImportNodeText(
          newNamedImports,
          `./${remoteDir}${filePath.slice(0, -3)}`
        )
    );
  }

  // 移除不存在的类型
  const exportTypes = findExportDeclarations(typesFile);
  exportTypes
    .filter((type) => removes.find((i) => type.getText().includes(i)))
    .forEach((type) =>
      recorder.remove(type.getStart() - 1, type.getEnd() - type.getStart())
    );

  // 追加类型
  recorder.insertLeft(
    typesFile.getEnd(),
    // 创建新的type节点
    adds.map((i) => createTypeAliasDeclarationText(i)).join('\n') + '\n'
  );
  // 提交更新
  tree.commitUpdate(recorder);
}

function createProvider(tree: Tree, interfaceNodes: ts.InterfaceDeclaration[]) {
  for (const interfaceNode of interfaceNodes) {
    const classContent = createProviderFromInterface(interfaceNode);
    if (!classContent) {
      throw new Error('Failed to generate implement class.');
    }
    const outputPath =
      root + providerDir + toFileName(getInterfaceName(interfaceNode)) + '.ts'; // 替换为要输出的文件路径
    if (tree.exists(outputPath)) {
      tree.delete(outputPath);
    }
    tree.create(outputPath, classContent);
  }
}

function createConsumer(tree: Tree, interfaceNodes: ts.InterfaceDeclaration[]) {
  for (const interfaceNode of interfaceNodes) {
    const classContent = createConsumerFromInterface(interfaceNode);
    if (!classContent) {
      throw new Error('Failed to generate implement class.');
    }
    const outputPath =
      root + consumerDir + toFileName(getInterfaceName(interfaceNode)) + '.ts'; // 替换为要输出的文件路径
    if (tree.exists(outputPath)) {
      tree.delete(outputPath);
    }
    tree.create(outputPath, classContent);
  }
}

function toFileName(str: string) {
  return str
    .replace(/([A-Z])/g, '.$1')
    .toLowerCase()
    .slice(1);
}

// 查找export节点
function findExportDeclarations(node: ts.Node): ts.ExportDeclaration[] {
  const interfaceNodes: ts.ExportDeclaration[] = [];
  if (ts.isExportDeclaration(node)) {
    interfaceNodes.push(node);
  }

  for (const child of node.getChildren()) {
    interfaceNodes.push(...findExportDeclarations(child));
  }

  return interfaceNodes;
}

// 查找import节点
function findImportDeclarations(node: ts.Node): ts.ImportDeclaration[] {
  const interfaceNodes: ts.ImportDeclaration[] = [];
  if (ts.isImportDeclaration(node)) {
    interfaceNodes.push(node);
  }

  for (const child of node.getChildren()) {
    interfaceNodes.push(...findImportDeclarations(child));
  }

  return interfaceNodes;
}

// 在命名空间节点中查找接口定义节点
function findInterfaceDeclarations(node: ts.Node): ts.InterfaceDeclaration[] {
  const interfaceNodes: ts.InterfaceDeclaration[] = [];
  if (ts.isInterfaceDeclaration(node)) {
    interfaceNodes.push(node);
  }

  for (const child of node.getChildren()) {
    interfaceNodes.push(...findInterfaceDeclarations(child));
  }

  return interfaceNodes;
}
