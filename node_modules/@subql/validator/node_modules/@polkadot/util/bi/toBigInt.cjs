"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.biToBigInt = biToBigInt;

var _toBigInt = require("../hex/toBigInt.cjs");

var _bn = require("../is/bn.cjs");

var _hex = require("../is/hex.cjs");

var _toBigInt2 = require("../is/toBigInt.cjs");

var _toBn = require("../is/toBn.cjs");

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name biToBigInt
 * @summary Creates a bigInt value from a BN, bigint, string (base 10 or hex) or number input.
 */
function biToBigInt(value) {
  return typeof value === 'bigint' ? value : !value ? BigInt(0) : (0, _hex.isHex)(value) ? (0, _toBigInt.hexToBigInt)(value.toString()) : (0, _bn.isBn)(value) ? BigInt(value.toString()) : (0, _toBigInt2.isToBigInt)(value) ? value.toBigInt() : (0, _toBn.isToBn)(value) ? BigInt(value.toBn().toString()) : BigInt(value);
}