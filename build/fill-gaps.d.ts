import TreeNode from 'pergamon-ui-components/build/models/tree-node';
export declare const reducer: (parent: TreeNode) => (agg: TreeNode[], curr: TreeNode, index: number, arr: TreeNode[]) => TreeNode[];
declare const fillGaps: (root: TreeNode, tree: TreeNode[]) => TreeNode[];
export default fillGaps;
