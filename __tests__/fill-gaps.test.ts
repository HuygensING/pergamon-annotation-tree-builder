import fillGaps, {reducer} from "../src/fill-gaps"
import { tree, treeGapsFilled } from './data/original'
import TreeNode from 'pergamon-ui-components/build/models/tree-node'

const removeNodeId = (node) => {
	delete node.id
	if (node.hasOwnProperty('children') && node.children.length) {
		node.children.map(removeNodeId)
	}
	return node
} 

describe('fillGaps', () => {
	test('fillGaps - reducer', () => {
		const root = new TreeNode({
			end: 79,
		})

		const tree = [
			new TreeNode({ start: 6, end: 29 }),
			new TreeNode({ start: 30, end: 31 }),
			new TreeNode({ start: 31, end: 72 }),
		]

		const received = tree.reduce(reducer(root), [])
			.map(removeNodeId)

		const expected = [
			new TreeNode({ start: 0, end: 6, type: '__text' }),
			new TreeNode({ start: 6, end: 29 }),
			new TreeNode({ start: 29, end: 30, type: '__text' }),
			new TreeNode({ start: 30, end: 31 }),
			new TreeNode({ start: 31, end: 72 }),
			new TreeNode({ start: 72, end: 79, type: '__text' }),
		];
		expect(received).toEqual(expected);
	});

	test('fillGaps - original', () => {
		const rootNode = new TreeNode({ end: 79 })

		const received = fillGaps(rootNode, tree).map(removeNodeId)

		expect(received).toEqual(treeGapsFilled);
	});
});
