import createTree from '../src'
import { Annotation } from 'pergamon-ui-components'

describe('integration', () => {
	test('simple', () => {
		const annotation = new Annotation({
			annotations: [
				new Annotation({ end: 40 }),
				new Annotation({ end: 80, start: 40 }),
			],
			end: 80,
		})

		const expected = [
			{
				"attributes": new Map(),
				"id": "__root_undefined",
				"row": 0,
				"end": 40,
				"start": 0,
				"type": "__root",
			},
			{
				"attributes": new Map(),
				"id": "__root_undefined",
				"row": 0,
				"end": 80,
				"start": 40,
				"type": "__root",
			},
		]

		expect(createTree(annotation)).toEqual(expected)
	})
})