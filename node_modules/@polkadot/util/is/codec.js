// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isFunction } from "./function.js";
import { isObject } from "./object.js";
export function isCodec(value) {
  return isObject(value) && isFunction(value.toU8a) && isObject(value.registry) && isFunction(value.registry.get);
}