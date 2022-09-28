import { Account, Rollup, DepositEvent, TransferEvent } from "../generated/schema";
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
  let depositEvent = new DepositEvent(event.transaction.hash.toHexString());

  entity.balance += event.params.value;

  depositEvent.to = event.params.to.toHexString();
  depositEvent.value = event.params.value;
  depositEvent.timestamp = event.block.timestamp;

  entity.save();
  depositEvent.save();
}

export function handleTransfer(event: Transfer): void {
  let from = getOrCreateAccount(event.params.from.toHexString());
  let to = getOrCreateAccount(event.params.to.toHexString().slice(20));
  let transferEvent = new TransferEvent(event.transaction.hash.toHexString());

  let value: BigInt = BigInt.fromUnsignedBytes(Bytes.fromUint8Array(event.params.value.reverse()));
  from.balance -= value;
  to.balance += value;

  transferEvent.from = event.params.from.toHexString();
  transferEvent.to = event.params.to.toHexString().slice(20);
  transferEvent.value = value
  transferEvent.timestamp = event.block.timestamp;

  from.save();
  to.save();
  transferEvent.save();
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
