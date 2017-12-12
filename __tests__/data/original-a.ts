import TreeNode from 'pergamon-ui-components/build/models/tree-node'

// The original data set, but the original persName goes from
// 23 to 38. If 23 is changed to 2, the persName (an inline el),
// crosses the two ps (block elements).

export const annotations: TreeNode[] = [
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	}),
];

export const annotationsSorted = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
	}),
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	})
];

export const annotationsWithRow = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 2,
		end: 39,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	})
];

export const annotationsSplitted = [
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
	}),
	new TreeNode({
		first: true,
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		segment: true,
		start: 6,
		end: 30,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		last: true,
		start: 31,
		end: 39,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 8,
		end: 17,
		type: 'geogName',
		row: 2,
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
		row: 2,
	})
];

export const tree = [
	new TreeNode({
		first: true,
		start: 2,
		end: 6,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 6,
		end: 30,
		type: 'p',
		row: 0,
		children: [
			new TreeNode({
				segment: true,
				start: 6,
				end: 30,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({
						start: 8,
						end: 17,
						type: 'geogName',
						row: 2,
					}),
				]
			}),
		]
	}),
	new TreeNode({
		segment: true,
		start: 30,
		end: 31,
		type: 'persName',
		row: 1,
	}),
	new TreeNode({
		start: 31,
		end: 72,
		type: 'p',
		row: 0,
		children: [
			new TreeNode({
				last: true,
				start: 31,
				end: 39,
				type: 'persName',
				row: 1,
				children: [
					new TreeNode({
						start: 34,
						end: 36,
						type: 'placeName',
						row: 2,
					})
				]
			}),
		]
	}),
]
