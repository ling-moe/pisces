import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { runInNewContext } from "node:vm";
import { select, input, multi, number, group } from './form-builder';
import { ast, query } from '@phenomnomnominal/tsquery';

type Option = {
  code: string;
  componentUri: string;
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function codeCdtr(_options: Option): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const {code,componentUri} = _options;
    const componentName = componentUri.split('/').reverse()[0];
    const result = runInNewContext(code,{ select, input, multi, number, group,});
    // TODO 暂时只支持多文件组件
    if(tree.exists(`${componentUri}/${componentName}.component.ts`)){
      applyCode(tree, componentUri, componentName, result);
    }else{
      externalSchematic('@schematics/angular', 'component', {
        name: componentName,
        path: componentUri,
        style: 'scss',
      });
    }
    return tree;
  };
}

async function applyCode(tree: Tree, componentUri: string, componentName: string, result: any) {
  // 解析ts
  const tsAst = ast(tree.readText(`${componentUri}/${componentName}.component.ts`));
  const classNode = query(tsAst, 'ClassDeclaration > PropertyDeclaration,Constructor,MethodDeclaration')
  const firstNode = classNode.find(i => i.getText().includes("form$11")) || classNode[0];
  firstNode.getStart()
  const htmlFile = tree.readText(`${componentUri}/${componentName}.component.html`);
  // 解析模板
  const angularCompiler = await import('@angular/compiler');
  const parsedTemplate = angularCompiler.parseTemplate(htmlFile, `${componentName}.component.html`);
  console.log(parsedTemplate.nodes);
  const htmlRecoder = tree.beginUpdate(`${componentUri}/${componentName}.component.html`);
  const tsRecoder = tree.beginUpdate(`${componentUri}/${componentName}.component.ts`);
  htmlRecoder.insertLeft(0, result[0].template);
  tsRecoder.insertLeft(firstNode.getStart(), result[0].init);
  tree.commitUpdate(htmlRecoder);
  tree.commitUpdate(tsRecoder);
}

