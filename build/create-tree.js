"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = require("./sort");
const split_annotations_1 = require("./split-annotations");
const add_row_1 = require("./add-row");
const to_tree_1 = require("./to-tree");
const fill_gaps_1 = require("./fill-gaps");
const to_node_1 = require("./to-node");
const tree_node_1 = require("pergamon-ui-components/build/models/tree-node");
exports.generateNodeId = (node, withSuffix = true) => {
    const suffix = node.hasOwnProperty('_first') ?
        '_first' :
        node.hasOwnProperty('_last') ?
            '_last' :
            node.hasOwnProperty('_segment') ?
                `_segment_${Math.round(Math.random() * 1000000)}` :
                '';
    return withSuffix ? `${node.type}_${node.annotationId}${suffix}` : `${node.type}_${node.annotationId}`;
};
const addNodeId = (node) => {
    node.id = exports.generateNodeId(node);
    return node;
};
const createTree = (root) => {
    const tree = root.annotations
        .map(to_node_1.default)
        .sort(sort_1.byDisplayStartEnd)
        .map(add_row_1.default())
        .sort(sort_1.byRowStartEnd)
        .reduce(split_annotations_1.splitAnnotations(), [])
        .map(add_row_1.default())
        .sort(sort_1.byRowStartEnd)
        .map(addNodeId)
        .reduce(to_tree_1.default, []);
    const rootNode = new tree_node_1.default({
        annotationId: root.id,
        attributes: root.attributes,
        start: root.start,
        end: root.end,
        type: root.type,
    });
    return fill_gaps_1.default(rootNode, tree);
};
exports.default = createTree;
