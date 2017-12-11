// The original test data.
import defaultNode from './default-node'
import { INode } from '../../src/to-node';

export const annotations: INode[] = [
	{
		...defaultNode,
		start: 6,
		end: 30,
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

export const annotationsSorted: INode[] = [
	{
		...defaultNode,
		start: 6,
		end: 30,
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

export const annotationsWithRow: INode[] = [
	{
		...defaultNode,
		start: 6,
		end: 30,
		_row: 0,
		type: 'p',
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		_row: 0,
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
		_row: 1,
		type: 'persName',
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		_row: 2,
		type: 'placeName',
	}
];

export const annotationsSplitted: INode[] = [
	{
		...defaultNode,
		_row: 0,
		end: 30,
		start: 6,
		type: 'p',
	},
	{
		...defaultNode,
		_row: 0,
		end: 72,
		start: 31,
		type: 'p',
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
		_row: 1,
		end: 30,
		start: 23,
		type: 'persName',
	},
	{
		...defaultNode,
		_segment: true,
		_row: 1,
		end: 31,
		start: 30,
		type: 'persName',
	},
	{
		...defaultNode,
		_last: true,
		_row: 1,
		end: 39,
		start: 31,
		type: 'persName',
	},
	{
		...defaultNode,
		_row: 2,
		end: 36,
		start: 34,
		type: 'placeName',
	}
];

export const tree: INode[] = [
	{
		...defaultNode,
		end: 30,
		_row: 0,
		start: 6,
		type: 'p',
		annotations: [
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
				end: 30,
				_row: 1,
				start: 23,
				type: 'persName',
			},
		]
	},
	{
		...defaultNode,
		_segment: true,
		end: 31,
		_row: 1,
		start: 30,
		type: 'persName',
	},
	{
		...defaultNode,
		end: 72,
		_row: 0,
		start: 31,
		type: 'p',
		annotations: [
			{
				...defaultNode,
				_last: true,
				end: 39,
				_row: 1,
				start: 31,
				type: 'persName',
				annotations: [
					{
						...defaultNode,
						end: 36,
						_row: 2,
						start: 34,
						type: 'placeName',
					}
				]
			},
		]
	},
]

export const treeGapsFilled: INode[] = [
	{
		end: 6,
		start: 0,
		type: '__text',
	},
	{
		...defaultNode,
		end: 30,
		_row: 0,
		start: 6,
		type: 'p',
		annotations: [
			{
				end: 8,
				start: 6,
				type: '__text',
			},
			{
				...defaultNode,
				end: 17,
				_row: 1,
				start: 8,
				type: 'geogName',
			},
			{
				end: 23,
				start: 17,
				type: '__text',
			},
			{
				...defaultNode,
				_first: true,
				end: 30,
				_row: 1,
				start: 23,
				type: 'persName',
			},
		]
	},
	{
		...defaultNode,
		_segment: true,
		end: 31,
		_row: 1,
		start: 30,
		type: 'persName',
	},
	{
		...defaultNode,
		end: 72,
		_row: 0,
		start: 31,
		type: 'p',
		annotations: [
			{
				...defaultNode,
				_last: true,
				end: 39,
				_row: 1,
				start: 31,
				type: 'persName',
				annotations: [
					{
						end: 34,
						start: 31,
						type: '__text',
					},
					{
						...defaultNode,
						end: 36,
						_row: 2,
						start: 34,
						type: 'placeName',
					},
					{
						end: 39,
						start: 36,
						type: '__text',
					},
				]
			},
			{
				end: 72,
				start: 39,
				type: '__text',
			}
		]
	},
	{
		end: 79,
		start: 72,
		type: '__text',
	},
]
