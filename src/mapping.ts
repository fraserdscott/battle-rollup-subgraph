import { Account, Rollup } from "../generated/schema";
import { Deposit, Transfer, Resolve, Withdraw } from "../generated/Rollup/Rollup"
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

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

export function getOrCreateRollup(
  id: string
): Rollup {
  let entity = Rollup.load(id);
  if (!entity) {
    entity = new Rollup(id);
    entity.resolved = false;
  }

  return entity;
}

export function handleDeposit(event: Deposit): void {
  let entity = getOrCreateAccount(event.params.to.toHexString());

  entity.balance += event.params.value;

  entity.save();
}

export function handleTransfer(event: Transfer): void {
  let from = getOrCreateAccount(event.params.from.toHexString());
  let to = getOrCreateAccount(event.params.to.toHexString());

  let value: BigInt = BigInt.fromUnsignedBytes(Bytes.fromUint8Array(event.params.value.reverse()));

  from.balance -= value;
  to.balance += value;

  from.save();
  to.save();
}

export function handleResolve(event: Resolve): void {
  let entity = getOrCreateRollup("0");

  entity.resolved = true;

  entity.save();
}

export function handleWithdraw(event: Withdraw): void {
  let entity = getOrCreateAccount(event.params.from.toHexString());

  entity.balance -= event.params.value;

  entity.save();
}
