"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToBigInt = isToBigInt;

var _function = require("./function.cjs");

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isToBigInt(value) {
  return !!value && (0, _function.isFunction)(value.toBigInt);
}