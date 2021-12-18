/// <reference types="bn.js" />
import type { BN } from '../bn';
import type { ToBigInt, ToBn } from '../types';
/**
 * @name biSqrt
 * @summary Calculates the integer square root of a bigint
 */
export declare function biSqrt<ExtToBn extends ToBn | ToBigInt>(value: ExtToBn | BN | bigint | string | number | null): bigint;
