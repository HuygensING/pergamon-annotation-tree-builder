import {byDisplayStartEnd, byRowStartEnd} from "./sort";
import {splitAnnotations} from "./split-annotations"
import addRow from "./add-row"
import toTree from "./to-tree"
import fillGaps from "./fill-gaps"
import { INode } from "./to-node"
import Annotation from 'pergamon-ui-components/build/models/annotation'

export const generateNodeId = (node: INode, withSuffix: boolean = true): string => {
	const suffix = node.hasOwnProperty('_first') ?
		'_first' :
		node.hasOwnProperty('_last') ?
			'_last' :
			node.hasOwnProperty('_segment') ?
				`_segment_${Math.round(Math.random() * 1000000)}` :
				'';

	return withSuffix ? `${node.type}_${node._id}${suffix}` : `${node.type}_${node._id}`;
}

const addNodeId = (node: INode) => {
	node._nodeId = generateNodeId(node);
	return node;
}

const createTree = (root: Annotation, nodeList: INode[]): INode[] => {
	const tree: INode[] = nodeList
		.sort(byDisplayStartEnd)
		.map(addRow())
		.sort(byRowStartEnd)
		.reduce(splitAnnotations(), [])
		.map(addRow())
		.sort(byRowStartEnd)
		.map(addNodeId)
		.reduce(toTree, []);

	return fillGaps(root, tree);
};

export default createTree;
