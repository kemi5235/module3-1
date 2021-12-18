"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.biToHex = biToHex;

var _spread = require("../object/spread.cjs");

var _index = require("../u8a/index.cjs");

var _toU8a = require("./toU8a.cjs");

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ZERO_STR = '0x00';
/**
 * @name biToHex
 * @summary Creates a hex value from a bigint object.
 */

function biToHex(value, options) {
  if (!value) {
    return ZERO_STR;
  }

  return (0, _index.u8aToHex)((0, _toU8a.biToU8a)(value, (0, _spread.objectSpread)( // We spread here, the default for hex values is BE (JSONRPC via substrate)
  {
    isLe: false,
    isNegative: false
  }, options)));
}