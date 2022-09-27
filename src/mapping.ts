import { Account } from "../generated/schema";
import { DepositCall } from "../generated/Rollup/Rollup"
import { BigInt } from "@graphprotocol/graph-ts";

let ZERO = BigInt.fromI32(0);

export function getOrCreateAccount(
  id: string
): Account {
  let entity = Account.load(id);
  if (!entity) {
    entity = new Account(id);
    entity.balance = ZERO;
  }

  return entity;
}

export function handleDeposit(call: DepositCall): void {
  let entity = getOrCreateAccount(call.from.toHexString());

  entity.balance += call.transaction.value;

  entity.save();
}
