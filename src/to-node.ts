import { Annotation, TreeNode } from 'pergamon-ui-components'

// export interface INode {
//     _first?: boolean
//     _id?: string
//     _last?: boolean
//     _row?: number
//     _segment?: boolean
//     _nodeId?: string
//     annotations?: INode[]
//     attributes: Map<string, string>
//     end: number
//     start: number
//     type: string
// }

const toNode = (annotation: Annotation): TreeNode => 
    new TreeNode({
        annotationId: annotation.id,
        attributes: annotation.attributes,
        end: annotation.end,
        start: annotation.start,
        type: annotation.type,
    })

export default toNode