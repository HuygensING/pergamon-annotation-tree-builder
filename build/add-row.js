"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = require("./has-overlap");
const display_by_tag_name_1 = require("./display-by-tag-name");
const addRow = () => {
    const rows = [[]];
    return (annotation) => {
        const space = [];
        for (let row = 0; row < rows.length; row++) {
            const annotationsInRow = rows[row];
            const isRowWithSpace = annotationsInRow.reduce((hasSpace, curr) => {
                return hasSpace && !has_overlap_1.default(annotation, curr);
            }, true);
            if (isRowWithSpace) {
                space[row] = null;
            }
            else {
                space[row] = annotationsInRow
                    .filter(a => has_overlap_1.default(annotation, a))
                    .some(a => display_by_tag_name_1.default.hasOwnProperty(a.type) && display_by_tag_name_1.default[a.type] === display_by_tag_name_1.Display.Block);
            }
        }
        const highestBlockIndex = space.lastIndexOf(true);
        let rowIndex = space.findIndex((x, i) => x == null && i > highestBlockIndex);
        if (rowIndex === -1) {
            const newLength = rows.push([annotation]);
            rowIndex = newLength - 1;
        }
        else {
            rows[rowIndex].push(annotation);
        }
        annotation.row = rowIndex;
        return annotation;
    };
};
exports.default = addRow;
