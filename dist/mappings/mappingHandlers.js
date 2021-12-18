"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = void 0;
const types_1 = require("../types");
async function handleEvent(event) {
    // The balances.transfer event has the following payload \[from, to, value\] that we can access
    // const fromAddress = event.event.data[0];
    const toAddress = event.event.data[1];
    const amount = event.event.data[2];
    // query for toAddress from DB
    const toAccount = await types_1.Account.get(toAddress.toString());
    // if not in DB, instantiate a new Account object using the toAddress as a unique ID
    if (!toAccount) {
        await new types_1.Account(toAddress.toString()).save();
    }
    // instantiate a new Transfer object using the block number and event.idx as a unique ID
    const transfer = new types_1.Transfer(`${event.block.block.header.number.toNumber()}-${event.idx}`);
    transfer.blockNumber = event.block.block.header.number.toBigInt();
    transfer.toId = toAddress.toString();
    transfer.amount = amount.toBigInt();
    await transfer.save();
}
exports.handleEvent = handleEvent;
