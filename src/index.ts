import createTree from './create-tree'
import toNode, { INode } from './to-node'
// import Annotation from 'pergamon-ui-components/build/models/annotation' 

// const toAnnotation = (annotationById: { string: Annotation }) => { 
   //     return (node: INode): Annotation | INode => {
//         const annotation = annotationById[node._id]

//         if (node.type !== '__text' && annotation != null) {
//             Object.keys(node).forEach(k => {
//                 annotation[k] = node[k]
//             })
//             if (node.hasOwnProperty('annotations')) {
//                 node.annotations = node.annotations.map(toAnnotation(annotationById))
//             }
//             return annotation
//         } else {
//             return node
//         }
//     }
// }

onmessage = function (e) {
    const nodeList: INode[] = e.data.annotations.map(toNode)

    // const annotationById: { string: Annotation } = e.data.annotations.reduce((curr, prev) => {
    //     prev[curr.id] = curr
    //     return prev
    // }, {})

    const tree: INode[] = createTree(e.data, nodeList)
        // .map(toAnnotation(annotationById))

    postMessage(tree);
};
