// function walkTree(tree: MenuNode[], cb: (item: MenuNode) => void){
//   for (const item of tree) {
//     cb(item);
//     item.children ? walkTree(item?.children, cb) : null;
//   }
// }

export type TreeNode<T> = {
  children?: (T&TreeNode<T>)[],
  level: number,
  expandable: boolean;
};
