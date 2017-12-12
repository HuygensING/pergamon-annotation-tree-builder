"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pergamon_ui_components_1 = require("pergamon-ui-components");
const toNode = (annotation) => new pergamon_ui_components_1.TreeNode({
    annotationId: annotation.id,
    attributes: annotation.attributes,
    end: annotation.end,
    start: annotation.start,
    type: annotation.type,
});
exports.default = toNode;
