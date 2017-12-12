import TreeNode from 'pergamon-ui-components/build/models/tree-node'
// The original test data.
export const annotations: TreeNode[] = [
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
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 23,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	})
]

export const annotationsSorted: TreeNode[] = [
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
		start: 8,
		end: 17,
		type: 'geogName',
	}),
	new TreeNode({
		start: 23,
		end: 39,
		type: 'persName',
	}),
	new TreeNode({
		start: 34,
		end: 36,
		type: 'placeName',
	})
]

export const annotationsWithRow: TreeNode[] = [
	new TreeNode({
		start: 6,
		end: 30,
		row: 0,
		type: 'p',
	}),
	new TreeNode({
		start: 31,
		end: 72,
		row: 0,
		type: 'p',
	}),
	new TreeNode({
		start: 8,
		end: 17,
		row: 1,
		type: 'geogName',
	}),
	new TreeNode({
		start: 23,
		end: 39,
		row: 1,
		type: 'persName',
	}),
	new TreeNode({
		row: 2,
		end: 36,
		start: 34,
		type: 'placeName',
	}),
]

export const annotationsSplitted: TreeNode[] = [
	new TreeNode({
		row: 0,
		end: 30,
		start: 6,
		type: 'p',
	}),
	new TreeNode({
		row: 0,
		end: 72,
		start: 31,
		type: 'p',
	}),
	new TreeNode({
		row: 1,
		end: 17,
		start: 8,
		type: 'geogName',
	}),
	new TreeNode({
		first: true,
		row: 1,
		end: 30,
		start: 23,
		type: 'persName',
	}),
	new TreeNode({
		segment: true,
		row: 1,
		end: 31,
		start: 30,
		type: 'persName',
	}),
	new TreeNode({
		last: true,
		row: 1,
		end: 39,
		start: 31,
		type: 'persName',
	}),
	new TreeNode({
		row: 2,
		end: 36,
		start: 34,
		type: 'placeName',
	}),
];

export const tree: TreeNode[] = [
	new TreeNode({
		end: 30,
		row: 0,
		start: 6,
		type: 'p',
		children: [
			new TreeNode({
				end: 17,
				row: 1,
				start: 8,
				type: 'geogName',
			}),
			new TreeNode({
				first: true,
				end: 30,
				row: 1,
				start: 23,
				type: 'persName',
			}),
		]
	}),
	new TreeNode({
		segment: true,
		end: 31,
		row: 1,
		start: 30,
		type: 'persName',
	}),
	new TreeNode({
		end: 72,
		row: 0,
		start: 31,
		type: 'p',
		children: [
			new TreeNode({
				last: true,
				end: 39,
				row: 1,
				start: 31,
				type: 'persName',
				children: [
					new TreeNode({
						end: 36,
						row: 2,
						start: 34,
						type: 'placeName',
					})
				]
			}),
		]
	}),
]

export const treeGapsFilled: TreeNode[] = [
	new TreeNode({
		end: 6,
		start: 0,
		type: '__text',
	}),
	new TreeNode({
		end: 30,
		row: 0,
		start: 6,
		type: 'p',
		children: [
			new TreeNode({
				end: 8,
				start: 6,
				type: '__text',
			}),
			new TreeNode({
				end: 17,
				row: 1,
				start: 8,
				type: 'geogName',
			}),
			new TreeNode({
				end: 23,
				start: 17,
				type: '__text',
			}),
			new TreeNode({
				first: true,
				end: 30,
				row: 1,
				start: 23,
				type: 'persName',
			}),
		]
	}),
	new TreeNode({
		segment: true,
		end: 31,
		row: 1,
		start: 30,
		type: 'persName',
	}),
	new TreeNode({
		end: 72,
		row: 0,
		start: 31,
		type: 'p',
		children: [
			new TreeNode({
				last: true,
				end: 39,
				row: 1,
				start: 31,
				type: 'persName',
				children: [
					new TreeNode({
						end: 34,
						start: 31,
						type: '__text',
					}),
					new TreeNode({
						end: 36,
						row: 2,
						start: 34,
						type: 'placeName',
					}),
					new TreeNode({
						end: 39,
						start: 36,
						type: '__text',
					}),
				]
			}),
			new TreeNode({
				end: 72,
				start: 39,
				type: '__text',
			})
		]
	}),
	new TreeNode({
		end: 79,
		start: 72,
		type: '__text',
	}),
]
