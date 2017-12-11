import { INode } from '../../src/to-node'
import defaultNode from './default-node'

// The original test data, but the first p overlaps
// the second (by just one codepoint).

export const annotations: INode[] = [
	{
		...defaultNode,
		start: 6,
		end: 32,
		type: 'p',
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		type: 'p',
	},
	{
		...defaultNode,
		start: 8,
		end: 17,
		type: 'geogName',
	},
	{
		...defaultNode,
		start: 23,
		end: 39,
		type: 'persName',
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsWithRow: INode[]  = [
	{
		...defaultNode,
		start: 6,
		end: 32,
		_row: 0,
		type: 'p',
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		_row: 1,
		type: 'p',
	},
	{
		...defaultNode,
		start: 8,
		end: 17,
		_row: 1,
		type: 'geogName',
	},
	{
		...defaultNode,
		start: 23,
		end: 39,
		_row: 2,
		type: 'persName',
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		_row: 3,
		type: 'placeName',
	}
];

export const annotationsSplitted: INode[] = [
	{
		...defaultNode,
		end: 32,
		_row: 0,
		start: 6,
		type: 'p',
	},
	{
		...defaultNode,
		_first: true,
		end: 32,
		_row: 1,
		start: 31,
		type: 'p',
	},
	{
		...defaultNode,
		_last: true,
		end: 72,
		_row: 1,
		start: 32,
		type: 'p',
	},
	{
		...defaultNode,
		end: 17,
		_row: 1,
		start: 8,
		type: 'geogName',
	},
	{
		...defaultNode,
		_first: true,
		end: 31,
		_row: 2,
		start: 23,
		type: 'persName',
	},
	{
		...defaultNode,
		_segment: true,
		end: 32,
		_row: 2,
		start: 31,
		type: 'persName',
	},
	{
		...defaultNode,
		_last: true,
		_row: 2,
		end: 39,
		start: 32,
		type: 'persName',
	},
	{
		...defaultNode,
		_row: 3,
		end: 36,
		start: 34,
		type: 'placeName',
	}
];

export const tree: INode[] = [
	{
		...defaultNode,
		_row: 0,
		end: 32,
		start: 6,
		type: 'p',
		annotations: [
			{
				...defaultNode,
				_first: true,
				_row: 1,
				end: 32,
				start: 31,
				type: 'p',
				annotations: [
					{
						...defaultNode,
						_row: 2,
						_segment: true,
						end: 32,
						start: 31,
						type: 'persName',
					}
				]
			},
			{
				...defaultNode,
				_row: 1,
				end: 17,
				start: 8,
				type: 'geogName',
			},
			{
				...defaultNode,
				_first: true,
				_row: 2,
				end: 31,
				start: 23,
				type: 'persName',
			},
		]
	},
	{
		...defaultNode,
		_last: true,
		_row: 1,
		end: 72,
		start: 32,
		type: 'p',
		annotations: [
			{
				...defaultNode,
				_last: true,
				_row: 2,
				end: 39,
				start: 32,
				type: 'persName',
				annotations: [
					{
						...defaultNode,
						_row: 3,
						end: 36,
						start: 34,
						type: 'placeName',
					}
				]
			},
		]
	},
];
