// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
import camelcase from 'camelcase';
const OPTS = {
  pascalCase: true
};
/**
 * @name stringPascalCase
 * @summary Convert a dash/dot/underscore/space separated string/String to PascalCase
 */

export function stringPascalCase(value) {
  return camelcase(value.toString(), OPTS);
}