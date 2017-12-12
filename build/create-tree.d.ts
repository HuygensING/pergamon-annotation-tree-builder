import Annotation from 'pergamon-ui-components/build/models/annotation';
import TreeNode from 'pergamon-ui-components/build/models/tree-node';
export declare const generateNodeId: (node: TreeNode, withSuffix?: boolean) => string;
declare const createTree: (root: Annotation) => TreeNode[];
export default createTree;
