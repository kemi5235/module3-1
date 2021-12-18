// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class Transfer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public amount?: bigint;

    public blockNumber?: bigint;

    public toId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Transfer entity without an ID");
        await store.set('Transfer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Transfer entity without an ID");
        await store.remove('Transfer', id.toString());
    }

    static async get(id:string): Promise<Transfer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Transfer entity without an ID");
        const record = await store.get('Transfer', id.toString());
        if (record){
            return Transfer.create(record);
        }else{
            return;
        }
    }


    static async getByToId(toId: string): Promise<Transfer[] | undefined>{
      
      const records = await store.getByField('Transfer', 'toId', toId);
      return records.map(record => Transfer.create(record));
      
    }


    static create(record: Partial<Omit<Transfer, FunctionPropertyNames<Transfer>>> & Entity): Transfer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Transfer(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
