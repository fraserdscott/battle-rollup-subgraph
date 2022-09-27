import { Account, Rollup } from "../generated/schema";
import { DepositCall, ResolveCall, WithdrawCall } from "../generated/Rollup/Rollup"
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

export function handleDeposit(call: DepositCall): void {
  let entity = getOrCreateAccount(call.from.toHexString());

  entity.balance += call.transaction.value;

  entity.save();
}

export function handleResolve(): void {
  let entity = getOrCreateRollup("0");

  entity.resolved = true;

  entity.save();
}

export function handleWithdraw(call: WithdrawCall): void {
  let entity = getOrCreateAccount(call.from.toHexString());

  entity.balance -= call.inputs.value;

  entity.save();
}