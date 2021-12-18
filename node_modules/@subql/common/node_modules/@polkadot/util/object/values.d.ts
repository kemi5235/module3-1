declare type Values<T extends object> = T[keyof T][];
/**
 * @name objectValues
 * @summary A version of Object.values that is typed for TS
 */
export declare function objectValues<T extends object>(obj: T): Values<T>;
export {};
