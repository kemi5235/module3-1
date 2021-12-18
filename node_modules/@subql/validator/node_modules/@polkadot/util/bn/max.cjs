"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bnMax = bnMax;
exports.checkMaxMin = checkMaxMin;

var _assert = require("../assert.cjs");

var _bn = require("./bn.cjs");

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function checkMaxMin(type, items) {
  (0, _assert.assert)(items.length >= 1, 'Must provide one or more BN arguments');
  let result = items[0];

  for (let i = 1; i < items.length; i++) {
    result = _bn.BN[type](result, items[i]);
  }

  return result;
}
/**
 * @name bnMax
 * @summary Finds and returns the highest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnMax } from '@polkadot/util';
 *
 * bnMax([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
 * ```
 */


function bnMax() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return checkMaxMin('max', items);
}