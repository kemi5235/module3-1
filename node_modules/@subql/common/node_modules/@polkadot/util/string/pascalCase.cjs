"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringPascalCase = stringPascalCase;

var _camelcase = _interopRequireDefault(require("camelcase"));

// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const OPTS = {
  pascalCase: true
};
/**
 * @name stringPascalCase
 * @summary Convert a dash/dot/underscore/space separated string/String to PascalCase
 */

function stringPascalCase(value) {
  return (0, _camelcase.default)(value.toString(), OPTS);
}