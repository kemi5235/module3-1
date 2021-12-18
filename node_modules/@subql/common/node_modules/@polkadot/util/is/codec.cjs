"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCodec = isCodec;

var _function = require("./function.cjs");

var _object = require("./object.cjs");

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
function isCodec(value) {
  return (0, _object.isObject)(value) && (0, _function.isFunction)(value.toU8a) && (0, _object.isObject)(value.registry) && (0, _function.isFunction)(value.registry.get);
}