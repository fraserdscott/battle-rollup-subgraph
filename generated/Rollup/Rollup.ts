// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Resolve extends ethereum.Event {
  get params(): Resolve__Params {
    return new Resolve__Params(this);
  }
}

export class Resolve__Params {
  _event: Resolve;

  constructor(event: Resolve) {
    this._event = event;
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get value(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Rollup extends ethereum.SmartContract {
  static bind(address: Address): Rollup {
    return new Rollup("Rollup", address);
  }

  FIELD_SIZE(): BigInt {
    let result = super.call("FIELD_SIZE", "FIELD_SIZE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_FIELD_SIZE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("FIELD_SIZE", "FIELD_SIZE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ROOT_HISTORY_SIZE(): BigInt {
    let result = super.call(
      "ROOT_HISTORY_SIZE",
      "ROOT_HISTORY_SIZE():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_ROOT_HISTORY_SIZE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ROOT_HISTORY_SIZE",
      "ROOT_HISTORY_SIZE():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ZERO_VALUE(): BigInt {
    let result = super.call("ZERO_VALUE", "ZERO_VALUE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ZERO_VALUE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ZERO_VALUE", "ZERO_VALUE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentRootIndex(): BigInt {
    let result = super.call(
      "currentRootIndex",
      "currentRootIndex():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentRootIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentRootIndex",
      "currentRootIndex():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  filledSubtrees(param0: BigInt): Bytes {
    let result = super.call(
      "filledSubtrees",
      "filledSubtrees(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_filledSubtrees(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "filledSubtrees",
      "filledSubtrees(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getLastRoot(): Bytes {
    let result = super.call("getLastRoot", "getLastRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_getLastRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getLastRoot", "getLastRoot():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashLeftRight(_hasher: Address, _left: Bytes, _right: Bytes): Bytes {
    let result = super.call(
      "hashLeftRight",
      "hashLeftRight(address,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(_hasher),
        ethereum.Value.fromFixedBytes(_left),
        ethereum.Value.fromFixedBytes(_right)
      ]
    );

    return result[0].toBytes();
  }

  try_hashLeftRight(
    _hasher: Address,
    _left: Bytes,
    _right: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashLeftRight",
      "hashLeftRight(address,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(_hasher),
        ethereum.Value.fromFixedBytes(_left),
        ethereum.Value.fromFixedBytes(_right)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashThree(hasher: Address, one: Bytes, two: Bytes, three: Bytes): Bytes {
    let result = super.call(
      "hashThree",
      "hashThree(address,bytes32,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(hasher),
        ethereum.Value.fromFixedBytes(one),
        ethereum.Value.fromFixedBytes(two),
        ethereum.Value.fromFixedBytes(three)
      ]
    );

    return result[0].toBytes();
  }

  try_hashThree(
    hasher: Address,
    one: Bytes,
    two: Bytes,
    three: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashThree",
      "hashThree(address,bytes32,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(hasher),
        ethereum.Value.fromFixedBytes(one),
        ethereum.Value.fromFixedBytes(two),
        ethereum.Value.fromFixedBytes(three)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasher(): Address {
    let result = super.call("hasher", "hasher():(address)", []);

    return result[0].toAddress();
  }

  try_hasher(): ethereum.CallResult<Address> {
    let result = super.tryCall("hasher", "hasher():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isKnownRoot(_root: Bytes): boolean {
    let result = super.call("isKnownRoot", "isKnownRoot(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_root)
    ]);

    return result[0].toBoolean();
  }

  try_isKnownRoot(_root: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isKnownRoot", "isKnownRoot(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_root)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  levels(): BigInt {
    let result = super.call("levels", "levels():(uint32)", []);

    return result[0].toBigInt();
  }

  try_levels(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("levels", "levels():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextIndex(): BigInt {
    let result = super.call("nextIndex", "nextIndex():(uint32)", []);

    return result[0].toBigInt();
  }

  try_nextIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextIndex", "nextIndex():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  roots(param0: BigInt): Bytes {
    let result = super.call("roots", "roots(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_roots(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("roots", "roots(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  zeros(i: BigInt): Bytes {
    let result = super.call("zeros", "zeros(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(i)
    ]);

    return result[0].toBytes();
  }

  try_zeros(i: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("zeros", "zeros(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(i)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _expiry(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get levels(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get hasher(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class ResolveCall extends ethereum.Call {
  get inputs(): ResolveCall__Inputs {
    return new ResolveCall__Inputs(this);
  }

  get outputs(): ResolveCall__Outputs {
    return new ResolveCall__Outputs(this);
  }
}

export class ResolveCall__Inputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }

  get state(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get proof(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ResolveCall__Outputs {
  _call: ResolveCall;

  constructor(call: ResolveCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get value(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get pathElements(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get pathIndices(): Array<boolean> {
    return this._call.inputValues[3].value.toBooleanArray();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
