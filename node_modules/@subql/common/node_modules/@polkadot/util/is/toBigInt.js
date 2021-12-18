// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isFunction } from "./function.js";
export function isToBigInt(value) {
  return !!value && isFunction(value.toBigInt);
}