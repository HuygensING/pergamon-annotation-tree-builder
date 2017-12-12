"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const pergamon_ui_components_1 = require("pergamon-ui-components");
const SYSTEM_TEXT_TYPE = '__text';
const generateNodeId = (suffix) => `${SYSTEM_TEXT_TYPE}_${uuidv4()}_${suffix}`;
exports.reducer = (parent) => {
    let prevEnd = parent.start;
    return (agg, curr, index, arr) => {
        const prev = agg[agg.length - 1];
        curr.start = curr.start < parent.start ? parent.start : curr.start;
        curr.end = curr.end > parent.end ? parent.end : curr.end;
        if (prev == null && curr.start > parent.start) {
            agg.push(new pergamon_ui_components_1.TreeNode({
                end: curr.start,
                id: generateNodeId('first'),
                start: parent.start,
                type: SYSTEM_TEXT_TYPE,
            }));
            prevEnd = curr.start;
        }
        if (curr.start > prevEnd) {
            const start = prevEnd;
            const end = curr.start;
            agg.push(new pergamon_ui_components_1.TreeNode({
                end,
                id: generateNodeId('segment'),
                start,
                type: SYSTEM_TEXT_TYPE,
            }));
        }
        agg.push(curr);
        prevEnd = curr.end > prevEnd ? curr.end : prevEnd;
        if (index === arr.length - 1 && prevEnd < parent.end) {
            agg.push(new pergamon_ui_components_1.TreeNode({
                end: parent.end,
                id: generateNodeId('last'),
                start: prevEnd,
                type: SYSTEM_TEXT_TYPE,
            }));
        }
        return agg;
    };
};
const fillGaps = (root, tree) => tree
    .reduce(exports.reducer(root), [])
    .map((subTree) => {
    if (subTree.hasOwnProperty('children')) {
        subTree.children = fillGaps(subTree, subTree.children);
    }
    return subTree;
});
exports.default = fillGaps;
