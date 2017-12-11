import Annotation from 'pergamon-ui-components/build/models/annotation'

export interface INode {
    _first?: boolean
    _id?: string
    _last?: boolean
    _row?: number
    _segment?: boolean
    _nodeId?: string
    annotations?: INode[]
    end: number
    start: number
    type: string
}

const toNode = (annotation: Annotation): INode => ({
    _id: annotation.id,
    end: annotation.end,
    start: annotation.start,
    type: annotation.type,
})

export default toNode