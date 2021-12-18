"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BI_QUINTILL = exports.BI_MILLION = exports.BI_MAX_INTEGER = exports.BI_BILLION = void 0;
// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name BI_MILLION
 * @summary BigInt constant for 1,000,000.
 */
const BI_MILLION = BigInt(1000000);
/**
* @name BI_BILLION
* @summary BigInt constant for 1,000,000,000.
*/

exports.BI_MILLION = BI_MILLION;
const BI_BILLION = BigInt(1000000000);
/**
* @name BI_QUINTILL
* @summary BigInt constant for 1,000,000,000,000,000,000.
*/

exports.BI_BILLION = BI_BILLION;
const BI_QUINTILL = BI_BILLION * BI_BILLION;
/**
* @name BI_MAX_INTEGER
* @summary BigInt constant for MAX_SAFE_INTEGER
*/

exports.BI_QUINTILL = BI_QUINTILL;
const BI_MAX_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
exports.BI_MAX_INTEGER = BI_MAX_INTEGER;