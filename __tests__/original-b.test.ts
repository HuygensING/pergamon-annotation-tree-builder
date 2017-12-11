import { annotations, annotationsWithRow, annotationsSplitted, tree } from './data/original-b';
import addRow from '../src/add-row';
import { toSplitPoints, splitAnnotations } from '../src/split-annotations';
import { byDisplayStartEnd } from '../src/sort';
import toTree from '../src/to-tree';

describe('addRow', () => {
	test('addRow 1', () => {
		const received = annotations.map(addRow());
		expect(received).toEqual(annotationsWithRow);
	})
});

describe('toSplitPoints', () => {
	test('toSplitPoints 1', () => {
		const received = annotationsWithRow.reduce(toSplitPoints, []);
		const expected = [31, 32];
		expect(received).toEqual(expected);
	});
});

describe('splitAnnotations', () => {
	test('splitAnnotations: second', () => {
		const received = annotationsWithRow
			.reduce(splitAnnotations(), [])
		expect(received).toEqual(annotationsSplitted);
	});
});

describe('toTree', () => {
	test('toTree 1', () => {
		const received = annotationsSplitted
			.sort(byDisplayStartEnd)
			.reduce(toTree, []);
		expect(received).toEqual(tree);
	})
});
