import {splitAnnotation} from "../src/split-annotations"
import TreeNode from 'pergamon-ui-components/build/models/tree-node'

describe('splitAnnotation', () => {
	test('splitAnnotation: on start point', () => {
		const received = splitAnnotation(new TreeNode({ start: 3, end: 4 }), [3]);
		const expected = [
			new TreeNode({ start: 3, end: 4 }),
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: point in between', () => {
		const received = splitAnnotation(new TreeNode({ start: 3, end: 5}), [4]);
		const expected = [
			new TreeNode({ start: 3, end: 4, first: true }),
			new TreeNode({ start: 4, end: 5, last: true }),
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: on end point', () => {
		const received = splitAnnotation(new TreeNode({ start: 3, end: 5}), [5]);
		const expected = [new TreeNode({ start: 3, end: 5 })];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: multiple split points 1', () => {
		const received = splitAnnotation(new TreeNode({ start: 0, end: 19}), [4, 11, 16]);
		const expected = [
			new TreeNode({ start: 0, end: 4, first: true }),
			new TreeNode({ start: 4, end: 11, segment: true }),
			new TreeNode({ start: 11, end: 16, segment: true }),
			new TreeNode({ start: 16, end: 19, last: true }),
		];
		expect(received).toEqual(expected);
	});

	test('splitAnnotation: multiple split points 2', () => {
		const received = splitAnnotation(new TreeNode({ start: 2, end: 9}), [3, 7]);
		const expected = [
			new TreeNode({ start: 2, end: 3, first: true }),
			new TreeNode({ start: 3, end: 7, segment: true }),
			new TreeNode({ start: 7, end: 9, last: true }),
		];
		expect(received).toEqual(expected);
	});
});
