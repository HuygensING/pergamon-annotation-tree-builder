import * as uuidv4 from 'uuid/v4'
import { INode } from './to-node'
import Annotation from 'pergamon-ui-components/build/models/annotation'
import { SYSTEM_TEXT_TYPE } from 'pergamon-ui-components/build/constants'

const generateNodeId = (suffix: string) => `${SYSTEM_TEXT_TYPE}_${uuidv4()}_${suffix}`

// Export for __tests__/fill-gaps.test.ts
export const reducer = (parent) => {
	let prevEnd = parent.start

	return (agg, curr, index, arr) => {
		const prev = agg[agg.length - 1]
		curr.start = curr.start < parent.start ? parent.start : curr.start
		curr.end = curr.end > parent.end ? parent.end : curr.end

		// If the first annotation does not start at 0, add a text component
		// from 0 until the start of the first annotation.
		if (prev == null && curr.start > parent.start) {
			agg.push({
				end: curr.start,
				_nodeId: generateNodeId('first'),
				start: parent.start,
				type: SYSTEM_TEXT_TYPE,
			})
			prevEnd = curr.start
		}

		// If the current start is bigger than the prevEnd, it means there
		// are some 'untagged' chars. Add a text component to the 'untagged' chars.
		// If "This {prevEnd}is{curr.start} an example", than "is" is untagged.
		if (curr.start > prevEnd) {
			const start = prevEnd
			const end = curr.start
			agg.push({
				end,
				_nodeId: generateNodeId('segment'),
				start,
				type: SYSTEM_TEXT_TYPE,
			})
		}

		// Add current annotation to the aggregate.
		// curr.text = data.text.slice(curr.start - 1, curr.end)
		agg.push(curr)

		// Update the prevEnd if the curr.end is bigger than prevEnd.
		// If curr.end is smaller, the current annotation is a child.
		prevEnd = curr.end > prevEnd ? curr.end : prevEnd

		// If the last annotation does not end at the end of the text,
		// wrap the last chars in a text component.
		if (index === arr.length - 1 && prevEnd < parent.end) {
			agg.push({
				end: parent.end,
				_nodeId: generateNodeId('last'),
				start: prevEnd,
				type: SYSTEM_TEXT_TYPE,
			})
		}

		return agg
	}
}

const fillGaps = (root: Annotation | INode, tree: INode[]): INode[] =>
	tree
		.reduce(reducer(root), [])
		.map((subTree: INode) => {
			if (Array.isArray(subTree)) {
				return fillGaps(root, subTree)
			} else if (subTree.hasOwnProperty('annotations')) {
				subTree.annotations = fillGaps(subTree, subTree.annotations)
			}

			return subTree
		})

export default fillGaps
