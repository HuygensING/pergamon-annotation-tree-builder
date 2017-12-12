"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_node_1 = require("pergamon-ui-components/build/models/tree-node");
const toNode = (annotation) => new tree_node_1.default({
    annotationId: annotation.id,
    attributes: annotation.attributes,
    end: annotation.end,
    start: annotation.start,
    type: annotation.type,
});
exports.default = toNode;
