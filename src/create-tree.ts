import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations"
import addRow from "./add-row"
import toTree from "./to-tree"
import fillGaps from "./fill-gaps"
import Annotation from 'pergamon-ui-components/build/models/annotation'
import toNode from './to-node'
import TreeNode from 'pergamon-ui-components/build/models/tree-node'

export const generateNodeId = (node: TreeNode, withSuffix: boolean = true): string => {
	const suffix = node.hasOwnProperty('_first') ?
		'_first' :
		node.hasOwnProperty('_last') ?
			'_last' :
			node.hasOwnProperty('_segment') ?
				`_segment_${Math.round(Math.random() * 1000000)}` :
				'';

	return withSuffix ? `${node.type}_${node.annotationId}${suffix}` : `${node.type}_${node.annotationId}`;
}

const addNodeId = (node: TreeNode) => {
	node.id = generateNodeId(node);
	return node;
}

const createTree = (root: Annotation): TreeNode[] => {
	const tree: TreeNode[] = root.annotations
		.map(toNode)
		.sort(byDisplayStartEnd)
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow())
		.sort(byRowStartEnd)
		.map(addNodeId)
		.reduce(toTree, []);

	const rootNode = new TreeNode({
		annotationId: root.id,
		attributes: root.attributes,
		start: root.start,
		end: root.end,
		type: root.type,
	})

	return fillGaps(rootNode, tree);
};

export default createTree;
