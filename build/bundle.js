/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hasOverlap = (a, b) => !(a.end <= b.start || a.start >= b.end);
exports.default = hasOverlap;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Display;
(function (Display) {
    Display[Display["None"] = 0] = "None";
    Display[Display["Inline"] = 1] = "Inline";
    Display[Display["Block"] = 2] = "Block";
})(Display = exports.Display || (exports.Display = {}));
;
exports.default = {
    ab: Display.Block,
    add: Display.Inline,
    anchor: Display.Inline,
    body: Display.Block,
    cell: Display.Block,
    choice: Display.Inline,
    closer: Display.Block,
    corr: Display.Inline,
    div: Display.Block,
    date: Display.Inline,
    figure: Display.Block,
    formula: Display.Inline,
    geogName: Display.Inline,
    graphic: Display.Block,
    head: Display.Block,
    hi: Display.Inline,
    item: Display.Block,
    l: Display.Block,
    label: Display.Inline,
    lb: Display.Block,
    lg: Display.Block,
    list: Display.Block,
    meta: Display.None,
    name: Display.Inline,
    note: Display.Block,
    opener: Display.Block,
    p: Display.Block,
    pb: Display.None,
    persName: Display.Inline,
    placeName: Display.Inline,
    q: Display.Block,
    row: Display.Block,
    rs: Display.Inline,
    seg: Display.Inline,
    sic: Display.Inline,
    space: Display.Block,
    table: Display.Block,
    text: Display.Block,
    title: Display.Block,
    TEI: Display.Block,
    teiHeader: Display.None,
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const create_tree_1 = __webpack_require__(3);
const to_node_1 = __webpack_require__(14);
onmessage = function (e) {
    const nodeList = e.data.annotations.map(to_node_1.default);
    const tree = create_tree_1.default(e.data, nodeList);
    postMessage(tree);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sort_1 = __webpack_require__(4);
const split_annotations_1 = __webpack_require__(5);
const add_row_1 = __webpack_require__(6);
const to_tree_1 = __webpack_require__(7);
const fill_gaps_1 = __webpack_require__(8);
exports.generateNodeId = (node, withSuffix = true) => {
    const suffix = node.hasOwnProperty('_first') ?
        '_first' :
        node.hasOwnProperty('_last') ?
            '_last' :
            node.hasOwnProperty('_segment') ?
                `_segment_${Math.round(Math.random() * 1000000)}` :
                '';
    return withSuffix ? `${node.type}_${node._id}${suffix}` : `${node.type}_${node._id}`;
};
const addNodeId = (node) => {
    node._nodeId = exports.generateNodeId(node);
    return node;
};
const createTree = (root, nodeList) => {
    const tree = nodeList
        .sort(sort_1.byDisplayStartEnd)
        .map(add_row_1.default())
        .sort(sort_1.byRowStartEnd)
        .reduce(split_annotations_1.splitAnnotations(), [])
        .map(add_row_1.default())
        .sort(sort_1.byRowStartEnd)
        .map(addNodeId)
        .reduce(to_tree_1.default, []);
    return fill_gaps_1.default(root, tree);
};
exports.default = createTree;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const display_by_tag_name_1 = __webpack_require__(1);
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(0);
exports.toSplitPoints = (splitPoints, curr, index, arr) => {
    if (index === 0)
        return splitPoints;
    const prevAnnotations = arr.slice(0, index);
    prevAnnotations.forEach((prev) => {
        if (has_overlap_1.default(prev, curr)) {
            if (prev.end > curr.start && prev.end < curr.end) {
                splitPoints.push(prev.end);
            }
            if (prev.start > curr.start && prev.start < curr.end) {
                splitPoints.push(prev.start);
            }
        }
    });
    return [...new Set(splitPoints)]
        .sort((a, b) => a - b);
};
exports.splitAnnotation = (annotation, splitPoints) => {
    if (annotation.start !== splitPoints[0]) {
        splitPoints = [annotation.start].concat(splitPoints);
    }
    if (annotation.end !== splitPoints[splitPoints.length - 1]) {
        splitPoints = splitPoints.concat(annotation.end);
    }
    const parts = splitPoints.reduce((agg, curr, index, arr) => {
        if (index === arr.length - 1)
            return agg;
        let to = arr[index + 1];
        agg.push(Object.assign({}, annotation, { start: curr, end: to }));
        return agg;
    }, []);
    if (parts.length > 1) {
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === 0) {
                part._first = true;
            }
            else if (i === (parts.length - 1)) {
                part._last = true;
            }
            else {
                part._segment = true;
            }
        }
    }
    return parts;
};
exports.splitAnnotations = () => {
    let splitPointIndex = 0;
    let splitPoints;
    const extractSplitPoints = (arr) => {
        splitPoints = arr.reduce(exports.toSplitPoints, [])
            .map((sp) => ({
            value: sp,
            active: false,
        }));
    };
    return (agg, curr, index, arr) => {
        if (splitPoints == null)
            extractSplitPoints(arr);
        if (!splitPoints.length) {
            agg.push(curr);
            return agg;
        }
        let currSplitPoint = splitPoints[splitPointIndex];
        if (curr.start > currSplitPoint.value) {
            if (arr.length < splitPointIndex - 1)
                splitPointIndex += 1;
            currSplitPoint = splitPoints[splitPointIndex];
        }
        if (currSplitPoint == null) {
            agg.push(curr);
            return agg;
        }
        const splitPointsInCurr = splitPoints.filter((sp) => {
            return sp.active && sp.value > curr.start && sp.value < curr.end;
        });
        if (splitPointsInCurr.length) {
            agg = agg.concat(exports.splitAnnotation(curr, splitPointsInCurr.map((sp) => sp.value)));
        }
        else {
            agg.push(curr);
        }
        for (let i = 0; i < splitPoints.length; i++) {
            const sp = splitPoints[i];
            if (sp.value === curr.start || sp.value === curr.end)
                sp.active = true;
        }
        return agg;
    };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(0);
const display_by_tag_name_1 = __webpack_require__(1);
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
        annotation._row = rowIndex;
        return annotation;
    };
};
exports.default = addRow;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const has_overlap_1 = __webpack_require__(0);
const toTree = (agg, curr, index, arr) => {
    if (agg.length === 0) {
        agg.push(curr);
        return agg;
    }
    const prevAnnotations = arr.slice(0, index);
    for (let i = prevAnnotations.length - 1; i >= 0; i--) {
        const prevAnnotation = prevAnnotations[i];
        if (has_overlap_1.default(curr, prevAnnotation)) {
            if (!prevAnnotation.hasOwnProperty('annotations'))
                prevAnnotation.annotations = [];
            prevAnnotation.annotations.push(curr);
            return agg;
        }
    }
    agg.push(curr);
    return agg;
};
exports.default = toTree;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4 = __webpack_require__(9);
const constants_1 = __webpack_require__(13);
const generateNodeId = (suffix) => `${constants_1.SYSTEM_TEXT_TYPE}_${uuidv4()}_${suffix}`;
exports.reducer = (parent) => {
    let prevEnd = parent.start;
    return (agg, curr, index, arr) => {
        const prev = agg[agg.length - 1];
        curr.start = curr.start < parent.start ? parent.start : curr.start;
        curr.end = curr.end > parent.end ? parent.end : curr.end;
        if (prev == null && curr.start > parent.start) {
            agg.push({
                end: curr.start,
                _nodeId: generateNodeId('first'),
                start: parent.start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
            prevEnd = curr.start;
        }
        if (curr.start > prevEnd) {
            const start = prevEnd;
            const end = curr.start;
            agg.push({
                end,
                _nodeId: generateNodeId('segment'),
                start,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
        }
        agg.push(curr);
        prevEnd = curr.end > prevEnd ? curr.end : prevEnd;
        if (index === arr.length - 1 && prevEnd < parent.end) {
            agg.push({
                end: parent.end,
                _nodeId: generateNodeId('last'),
                start: prevEnd,
                type: constants_1.SYSTEM_TEXT_TYPE,
            });
        }
        return agg;
    };
};
const fillGaps = (root, tree) => tree
    .reduce(exports.reducer(root), [])
    .map((subTree) => {
    if (Array.isArray(subTree)) {
        return fillGaps(root, subTree);
    }
    else if (subTree.hasOwnProperty('annotations')) {
        subTree.annotations = fillGaps(subTree, subTree.annotations);
    }
    return subTree;
});
exports.default = fillGaps;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(10);
var bytesToUuid = __webpack_require__(12);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceWait = 1000;
exports.IGNORE_CLASSNAME = '__ignore';
exports.SYSTEM_TEXT_TYPE = '__text';
exports.SYSTEM_ROOT_TYPE = '__root';


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const toNode = (annotation) => ({
    _id: annotation.id,
    end: annotation.end,
    start: annotation.start,
    type: annotation.type,
});
exports.default = toNode;


/***/ })
/******/ ]);