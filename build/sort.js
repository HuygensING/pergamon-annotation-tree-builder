"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const display_by_tag_name_1 = require("./display-by-tag-name");
exports.byStartEnd = (a, b) => {
    if (a.start > b.start)
        return 1;
    if (b.start > a.start)
        return -1;
    if (a.start === b.start) {
        if (a.end > b.end)
            return -1;
        if (b.end > a.end)
            return 1;
    }
    return 0;
};
exports.byDisplayStartEnd = (a, b) => {
    const aDisplay = display_by_tag_name_1.default.hasOwnProperty(a.type) ? display_by_tag_name_1.default[a.type] : display_by_tag_name_1.Display.Inline;
    const bDisplay = display_by_tag_name_1.default.hasOwnProperty(b.type) ? display_by_tag_name_1.default[b.type] : display_by_tag_name_1.Display.Inline;
    if (aDisplay !== bDisplay) {
        return (aDisplay === display_by_tag_name_1.Display.Inline) ? 1 : -1;
    }
    else {
        return exports.byStartEnd(a, b);
    }
};
exports.byRowStartEnd = (a, b) => {
    if (a.row > b.row)
        return 1;
    else if (a.row < b.row)
        return -1;
    else
        return exports.byStartEnd(a, b);
};
