// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isFunction } from "./function.js";
import { isObject } from "./object.js";

/**
 * @name isCompact
 * @summary Tests for SCALE-Compact-like object instance.
 */
export function isCompact(value) {
  return isObject(value) && isFunction(value.toBigInt) && isFunction(value.toBn) && isFunction(value.toNumber) && isFunction(value.unwrap);
}