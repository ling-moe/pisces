import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// Just return the tree
export function update(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info(' this is schematics')
    return tree;
  };
}
