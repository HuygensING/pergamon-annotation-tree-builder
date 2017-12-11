import { INode } from '../../src/to-node'
import defaultNode from './default-node'
// The original data set, but the original persName goes from
// 23 to 38. If 23 is changed to 2, the persName (an inline el),
// crosses the two ps (block elements).

export const annotations: INode[] = [
	{
		...defaultNode,
		start: 2,
		end: 39,
		type: 'persName',
	},
	{
		...defaultNode,
		start: 6,
		end: 30,
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
		start: 31,
		end: 72,
		type: 'p',
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsSorted = [
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
		start: 2,
		end: 39,
		type: 'persName',
	},
	{
		...defaultNode,
		start: 8,
		end: 17,
		type: 'geogName',
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		type: 'placeName',
	}
];

export const annotationsWithRow = [
	{
		...defaultNode,
		start: 6,
		end: 30,
		type: 'p',
		_row: 0,
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		type: 'p',
		_row: 0,
	},
	{
		...defaultNode,
		start: 2,
		end: 39,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		start: 8,
		end: 17,
		type: 'geogName',
		_row: 2,
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		type: 'placeName',
		_row: 2,
	}
];

export const annotationsSplitted = [
	{
		...defaultNode,
		start: 6,
		end: 30,
		type: 'p',
		_row: 0,
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		type: 'p',
		_row: 0,
	},
	{
		...defaultNode,
		_first: true,
		start: 2,
		end: 6,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		_segment: true,
		start: 6,
		end: 30,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		_segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		_last: true,
		start: 31,
		end: 39,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		start: 8,
		end: 17,
		type: 'geogName',
		_row: 2,
	},
	{
		...defaultNode,
		start: 34,
		end: 36,
		type: 'placeName',
		_row: 2,
	}
];

export const tree = [
	{
		...defaultNode,
		_first: true,
		start: 2,
		end: 6,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		start: 6,
		end: 30,
		type: 'p',
		_row: 0,
		annotations: [
			{
				...defaultNode,
				_segment: true,
				start: 6,
				end: 30,
				type: 'persName',
				_row: 1,
				annotations: [
					{
						...defaultNode,
						start: 8,
						end: 17,
						type: 'geogName',
						_row: 2,
					},
				]
			},
		]
	},
	{
		...defaultNode,
		_segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		_row: 1,
	},
	{
		...defaultNode,
		start: 31,
		end: 72,
		type: 'p',
		_row: 0,
		annotations: [
			{
				...defaultNode,
				_last: true,
				start: 31,
				end: 39,
				type: 'persName',
				_row: 1,
				annotations: [
					{
						...defaultNode,
						start: 34,
						end: 36,
						type: 'placeName',
						_row: 2,
					}
				]
			},
		]
	},
]
