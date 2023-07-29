import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

// 目标目录
const root = './src/lib/';
const remoteDir = 'remote/';
const consumerDir = 'consumer/';
    // const providerDir = 'provider/';

export function update(): Rule {
  return (tree: Tree, context: SchematicContext) => {

    // 扫描出符合要求的的文件
    const filePaths = tree.getDir(root+remoteDir).subfiles.filter(file => file.endsWith('.remote.ts'));
    for(const filePath of filePaths){
      // 读取文件内容
      const sourceFile = convertSourceFile(tree, filePath);
      // 查找interface节点
      const interfaceNodes = findInterfaceDeclarations(sourceFile);
      // 创建consumer
      createConsumer(tree, interfaceNodes);
      //
    }
    return tree;


  };
}

function convertSourceFile(tree: Tree, filePath: string) {
  const fileContent = tree.read(root + remoteDir + filePath);
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

function createConsumer(tree: Tree, interfaceNodes: ts.InterfaceDeclaration[]) {
  for(const interfaceNode of interfaceNodes){
    const classContent = generateClassFromInterface(interfaceNode);
    if (!classContent) {
      throw new Error('Failed to generate implement class.');
    }
    const outputPath = root + consumerDir + toFileName(getInterfaceName(interfaceNode)) + '.ts'; // 替换为要输出的文件路径
    if (tree.exists(outputPath)) {
      tree.delete(outputPath);
    }
    tree.create(outputPath, classContent);
  }

}

function toFileName(str: string){
  return str.replace(/([A-Z])/g, '.$1').toLowerCase().slice(1);
}

// 生成实现接口的类代码
function generateClassFromInterface(interfaceNode: ts.InterfaceDeclaration): string | undefined {
  const interfaceName = getInterfaceName(interfaceNode);
  const classContent = `
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ${interfaceName}Consumer } from '../musubi.types';

@Injectable({
  providedIn: 'root',
})
export class ${interfaceName} implements ${interfaceName}Consumer {

  constructor(protected http: HttpClient) {
  }

  ${generateMethodImplementations(interfaceNode)}

}
  `;

  return classContent;
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

// 获取接口名称
function getInterfaceName(node: ts.InterfaceDeclaration): string {
  return node.name ? node.name.text : '';
}

// 生成接口方法的实现
function generateMethodImplementations(node: ts.InterfaceDeclaration): string {
  return node.members
    .filter(ts.isMethodSignature)
    .map((member) => {
      return `${member.name.getText()}(${member.parameters.map(token => token.getText()).join(', ') }): Observable<${member.type?.getText()??'void'}> {\n    throw new Error("Method need implementation")\n  }`;
    })
    .join('\n\n');
}
