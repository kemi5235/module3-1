import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class Account implements Entity {
    constructor(id: string);
    id: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Account | undefined>;
    static create(record: Partial<Omit<Account, FunctionPropertyNames<Account>>> & Entity): Account;
}
