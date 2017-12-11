import fillGaps, {reducer} from "../src/fill-gaps"
import defaultNode from './data/default-node'
import { tree, treeGapsFilled } from './data/original'
import { INode } from "../src/to-node";

describe('fillGaps', () => {
	test('fillGaps - reducer', () => {
		const root = {
			end: 79,
			start: 0,
		}

		const tree = [
			{ ...defaultNode, start: 6, end: 29 },
			{ ...defaultNode, start: 30, end: 31 },
			{ ...defaultNode, start: 31, end: 72 },
		]

		const received = tree.reduce(reducer(root), [])
			.map(x => { delete x._nodeId; return x; })

		const expected = [
			{ ...defaultNode, start: 0, end: 6, type: '__text' },
			{ ...defaultNode, start: 6, end: 29 },
			{ ...defaultNode, start: 29, end: 30, type: '__text' },
			{ ...defaultNode, start: 30, end: 31 },
			{ ...defaultNode, start: 31, end: 72 },
			{ ...defaultNode, start: 72, end: 79, type: '__text' },
		];
		expect(received).toEqual(expected);
	});

	test('fillGaps - original', () => {
		const root = {
			start: 0,
			end: 79,
			annotations: null,
			attributes: null,
			id: null,
			keywords: null,
			metadata: null,
			source: null,
			target: null,
			text: null,
			tree: null,
			type: null,
		}

		const removeNodeId = (node: INode) => {
			delete node._nodeId
			if (node.hasOwnProperty('annotations') && node.annotations.length) {
				node.annotations.map(removeNodeId)
			}
			return node
		} 

		const received = fillGaps(root, tree).map(removeNodeId)

		expect(received).toEqual(treeGapsFilled);
	});
});
