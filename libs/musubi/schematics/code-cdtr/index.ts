import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { runInNewContext } from "node:vm";
import { select, input, multi, number, group } from './form-builder';

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
      const html = tree.get(`${componentUri}/${componentName}.component.html`);
      const ts = tree.get(`${componentUri}/${componentName}.component.ts`);
      const htmlRecoder = tree.beginUpdate(`${componentUri}/${componentName}.component.html`);
      const tsRecoder = tree.beginUpdate(`${componentUri}/${componentName}.component.ts`);
      htmlRecoder.insertLeft(0, result[0].template);
      tsRecoder.insertLeft(0, result[0].init);
      tree.commitUpdate(htmlRecoder)
      tree.commitUpdate(tsRecoder)
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
