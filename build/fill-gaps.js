"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = require("uuid/v4");
const constants_1 = require("pergamon-ui-components/build/constants");
const tree_node_1 = require("pergamon-ui-components/build/models/tree-node");
const generateNodeId = (suffix) => `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}_${suffix}`;
exports.reducer = (parent) => {
    let prevEnd = parent.start;
    return (agg, curr, index, arr) => {
        const prev = agg[agg.length - 1];
        curr.start = curr.start < parent.start ? parent.start : curr.start;
        curr.end = curr.end > parent.end ? parent.end : curr.end;
        if (prev == null && curr.start > parent.start) {
            agg.push(new tree_node_1.default({
                end: curr.start,
                id: generateNodeId('first'),
                start: parent.start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            }));
            prevEnd = curr.start;
        }
        if (curr.start > prevEnd) {
            const start = prevEnd;
            const end = curr.start;
            agg.push(new tree_node_1.default({
                end,
                id: generateNodeId('segment'),
                start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            }));
        }
        agg.push(curr);
        prevEnd = curr.end > prevEnd ? curr.end : prevEnd;
        if (index === arr.length - 1 && prevEnd < parent.end) {
            agg.push(new tree_node_1.default({
                end: parent.end,
                id: generateNodeId('last'),
                start: prevEnd,
                type: constants_1.SYSTEM_TEXT_TYPE,
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
