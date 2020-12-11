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

export class GeneratedRandomSupply extends ethereum.Event {
  get params(): GeneratedRandomSupply__Params {
    return new GeneratedRandomSupply__Params(this);
  }
}

export class GeneratedRandomSupply__Params {
  _event: GeneratedRandomSupply;

  constructor(event: GeneratedRandomSupply) {
    this._event = event;
  }

  get investmentDay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get randomSupply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class GeneratedStaticSupply extends ethereum.Event {
  get params(): GeneratedStaticSupply__Params {
    return new GeneratedStaticSupply__Params(this);
  }
}

export class GeneratedStaticSupply__Params {
  _event: GeneratedStaticSupply;

  constructor(event: GeneratedStaticSupply) {
    this._event = event;
  }

  get investmentDay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get staticSupply(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class GeneratingRandomSupply extends ethereum.Event {
  get params(): GeneratingRandomSupply__Params {
    return new GeneratingRandomSupply__Params(this);
  }
}

export class GeneratingRandomSupply__Params {
  _event: GeneratingRandomSupply;

  constructor(event: GeneratingRandomSupply) {
    this._event = event;
  }

  get investmentDay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GenerationStatus extends ethereum.Event {
  get params(): GenerationStatus__Params {
    return new GenerationStatus__Params(this);
  }
}

export class GenerationStatus__Params {
  _event: GenerationStatus;

  constructor(event: GenerationStatus) {
    this._event = event;
  }

  get investmentDay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get result(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class LogNewProvableQuery extends ethereum.Event {
  get params(): LogNewProvableQuery__Params {
    return new LogNewProvableQuery__Params(this);
  }
}

export class LogNewProvableQuery__Params {
  _event: LogNewProvableQuery;

  constructor(event: LogNewProvableQuery) {
    this._event = event;
  }

  get description(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class ReferralAdded extends ethereum.Event {
  get params(): ReferralAdded__Params {
    return new ReferralAdded__Params(this);
  }
}

export class ReferralAdded__Params {
  _event: ReferralAdded;

  constructor(event: ReferralAdded) {
    this._event = event;
  }

  get referral(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get referee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UniSwapResult extends ethereum.Event {
  get params(): UniSwapResult__Params {
    return new UniSwapResult__Params(this);
  }
}

export class UniSwapResult__Params {
  _event: UniSwapResult;

  constructor(event: UniSwapResult) {
    this._event = event;
  }

  get amountToken(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountETH(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WiseReservation extends ethereum.Event {
  get params(): WiseReservation__Params {
    return new WiseReservation__Params(this);
  }
}

export class WiseReservation__Params {
  _event: WiseReservation;

  constructor(event: WiseReservation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get investmentDay(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Wise__gResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class Wise extends ethereum.SmartContract {
  static bind(address: Address): Wise {
    return new Wise("Wise", address);
  }

  REFUND_SPONSOR(): Address {
    let result = super.call("REFUND_SPONSOR", "REFUND_SPONSOR():(address)", []);

    return result[0].toAddress();
  }

  try_REFUND_SPONSOR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "REFUND_SPONSOR",
      "REFUND_SPONSOR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TOKEN_DEFINER(): Address {
    let result = super.call("TOKEN_DEFINER", "TOKEN_DEFINER():(address)", []);

    return result[0].toAddress();
  }

  try_TOKEN_DEFINER(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "TOKEN_DEFINER",
      "TOKEN_DEFINER():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  UNISWAP_PAIR(): Address {
    let result = super.call("UNISWAP_PAIR", "UNISWAP_PAIR():(address)", []);

    return result[0].toAddress();
  }

  try_UNISWAP_PAIR(): ethereum.CallResult<Address> {
    let result = super.tryCall("UNISWAP_PAIR", "UNISWAP_PAIR():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  UNISWAP_ROUTER(): Address {
    let result = super.call("UNISWAP_ROUTER", "UNISWAP_ROUTER():(address)", []);

    return result[0].toAddress();
  }

  try_UNISWAP_ROUTER(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "UNISWAP_ROUTER",
      "UNISWAP_ROUTER():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  WISE_CONTRACT(): Address {
    let result = super.call("WISE_CONTRACT", "WISE_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_WISE_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "WISE_CONTRACT",
      "WISE_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _currentWiseDay(): BigInt {
    let result = super.call(
      "_currentWiseDay",
      "_currentWiseDay():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try__currentWiseDay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_currentWiseDay",
      "_currentWiseDay():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dailyTotalInvestment(param0: BigInt): BigInt {
    let result = super.call(
      "dailyTotalInvestment",
      "dailyTotalInvestment(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_dailyTotalInvestment(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "dailyTotalInvestment",
      "dailyTotalInvestment(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dailyTotalSupply(param0: BigInt): BigInt {
    let result = super.call(
      "dailyTotalSupply",
      "dailyTotalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_dailyTotalSupply(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "dailyTotalSupply",
      "dailyTotalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fundedDays(): i32 {
    let result = super.call("fundedDays", "fundedDays():(uint8)", []);

    return result[0].toI32();
  }

  try_fundedDays(): ethereum.CallResult<i32> {
    let result = super.tryCall("fundedDays", "fundedDays():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  g(): Wise__gResult {
    let result = super.call(
      "g",
      "g():(uint64,uint64,uint64,uint64,uint256,uint256,uint256)",
      []
    );

    return new Wise__gResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_g(): ethereum.CallResult<Wise__gResult> {
    let result = super.tryCall(
      "g",
      "g():(uint64,uint64,uint64,uint64,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Wise__gResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  investmentsOnAllDays(): Array<BigInt> {
    let result = super.call(
      "investmentsOnAllDays",
      "investmentsOnAllDays():(uint256[51])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_investmentsOnAllDays(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "investmentsOnAllDays",
      "investmentsOnAllDays():(uint256[51])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  investorAccountCount(param0: BigInt): BigInt {
    let result = super.call(
      "investorAccountCount",
      "investorAccountCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_investorAccountCount(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorAccountCount",
      "investorAccountCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorAccounts(param0: BigInt, param1: BigInt): Address {
    let result = super.call(
      "investorAccounts",
      "investorAccounts(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_investorAccounts(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "investorAccounts",
      "investorAccounts(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  investorBalances(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "investorBalances",
      "investorBalances(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_investorBalances(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorBalances",
      "investorBalances(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorTotalBalance(param0: Address): BigInt {
    let result = super.call(
      "investorTotalBalance",
      "investorTotalBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_investorTotalBalance(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorTotalBalance",
      "investorTotalBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  investorsOnAllDays(): Array<BigInt> {
    let result = super.call(
      "investorsOnAllDays",
      "investorsOnAllDays():(uint256[51])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_investorsOnAllDays(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "investorsOnAllDays",
      "investorsOnAllDays():(uint256[51])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  investorsOnDay(_investmentDay: BigInt): BigInt {
    let result = super.call(
      "investorsOnDay",
      "investorsOnDay(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_investmentDay)]
    );

    return result[0].toBigInt();
  }

  try_investorsOnDay(_investmentDay: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "investorsOnDay",
      "investorsOnDay(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_investmentDay)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  myInvestmentAmount(_investmentDay: BigInt): BigInt {
    let result = super.call(
      "myInvestmentAmount",
      "myInvestmentAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_investmentDay)]
    );

    return result[0].toBigInt();
  }

  try_myInvestmentAmount(_investmentDay: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "myInvestmentAmount",
      "myInvestmentAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_investmentDay)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  myInvestmentAmountAllDays(): Array<BigInt> {
    let result = super.call(
      "myInvestmentAmountAllDays",
      "myInvestmentAmountAllDays():(uint256[51])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_myInvestmentAmountAllDays(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "myInvestmentAmountAllDays",
      "myInvestmentAmountAllDays():(uint256[51])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  myTotalInvestmentAmount(): BigInt {
    let result = super.call(
      "myTotalInvestmentAmount",
      "myTotalInvestmentAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_myTotalInvestmentAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "myTotalInvestmentAmount",
      "myTotalInvestmentAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  payoutInvestorAddress(_investorAddress: Address): BigInt {
    let result = super.call(
      "payoutInvestorAddress",
      "payoutInvestorAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_investorAddress)]
    );

    return result[0].toBigInt();
  }

  try_payoutInvestorAddress(
    _investorAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "payoutInvestorAddress",
      "payoutInvestorAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_investorAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  payoutReferralAddress(_referralAddress: Address): BigInt {
    let result = super.call(
      "payoutReferralAddress",
      "payoutReferralAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_referralAddress)]
    );

    return result[0].toBigInt();
  }

  try_payoutReferralAddress(
    _referralAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "payoutReferralAddress",
      "payoutReferralAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_referralAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  referralAccountCount(): BigInt {
    let result = super.call(
      "referralAccountCount",
      "referralAccountCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_referralAccountCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "referralAccountCount",
      "referralAccountCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  referralAccounts(param0: BigInt): Address {
    let result = super.call(
      "referralAccounts",
      "referralAccounts(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_referralAccounts(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "referralAccounts",
      "referralAccounts(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  referralAmount(param0: Address): BigInt {
    let result = super.call(
      "referralAmount",
      "referralAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_referralAmount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "referralAmount",
      "referralAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  referralTokens(param0: Address): BigInt {
    let result = super.call(
      "referralTokens",
      "referralTokens(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_referralTokens(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "referralTokens",
      "referralTokens(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestRefund(_investor: Address, _succesor: Address): BigInt {
    let result = super.call(
      "requestRefund",
      "requestRefund(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_investor),
        ethereum.Value.fromAddress(_succesor)
      ]
    );

    return result[0].toBigInt();
  }

  try_requestRefund(
    _investor: Address,
    _succesor: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "requestRefund",
      "requestRefund(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_investor),
        ethereum.Value.fromAddress(_succesor)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supplyOnAllDays(): Array<BigInt> {
    let result = super.call(
      "supplyOnAllDays",
      "supplyOnAllDays():(uint256[51])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_supplyOnAllDays(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "supplyOnAllDays",
      "supplyOnAllDays():(uint256[51])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  uniqueInvestorCount(): BigInt {
    let result = super.call(
      "uniqueInvestorCount",
      "uniqueInvestorCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_uniqueInvestorCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "uniqueInvestorCount",
      "uniqueInvestorCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uniqueInvestors(param0: BigInt): Address {
    let result = super.call(
      "uniqueInvestors",
      "uniqueInvestors(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_uniqueInvestors(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "uniqueInvestors",
      "uniqueInvestors(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _wiseToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uniswapPair(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class $getMyTokensCall extends ethereum.Call {
  get inputs(): $getMyTokensCall__Inputs {
    return new $getMyTokensCall__Inputs(this);
  }

  get outputs(): $getMyTokensCall__Outputs {
    return new $getMyTokensCall__Outputs(this);
  }
}

export class $getMyTokensCall__Inputs {
  _call: $getMyTokensCall;

  constructor(call: $getMyTokensCall) {
    this._call = call;
  }
}

export class $getMyTokensCall__Outputs {
  _call: $getMyTokensCall;

  constructor(call: $getMyTokensCall) {
    this._call = call;
  }
}

export class __callbackCall extends ethereum.Call {
  get inputs(): __callbackCall__Inputs {
    return new __callbackCall__Inputs(this);
  }

  get outputs(): __callbackCall__Outputs {
    return new __callbackCall__Outputs(this);
  }
}

export class __callbackCall__Inputs {
  _call: __callbackCall;

  constructor(call: __callbackCall) {
    this._call = call;
  }

  get _myid(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _result(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class __callbackCall__Outputs {
  _call: __callbackCall;

  constructor(call: __callbackCall) {
    this._call = call;
  }
}

export class __callback1Call extends ethereum.Call {
  get inputs(): __callback1Call__Inputs {
    return new __callback1Call__Inputs(this);
  }

  get outputs(): __callback1Call__Outputs {
    return new __callback1Call__Outputs(this);
  }
}

export class __callback1Call__Inputs {
  _call: __callback1Call;

  constructor(call: __callback1Call) {
    this._call = call;
  }

  get _queryId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _result(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _proof(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class __callback1Call__Outputs {
  _call: __callback1Call;

  constructor(call: __callback1Call) {
    this._call = call;
  }
}

export class __timeoutCall extends ethereum.Call {
  get inputs(): __timeoutCall__Inputs {
    return new __timeoutCall__Inputs(this);
  }

  get outputs(): __timeoutCall__Outputs {
    return new __timeoutCall__Outputs(this);
  }
}

export class __timeoutCall__Inputs {
  _call: __timeoutCall;

  constructor(call: __timeoutCall) {
    this._call = call;
  }
}

export class __timeoutCall__Outputs {
  _call: __timeoutCall;

  constructor(call: __timeoutCall) {
    this._call = call;
  }
}

export class DefineTokenCall extends ethereum.Call {
  get inputs(): DefineTokenCall__Inputs {
    return new DefineTokenCall__Inputs(this);
  }

  get outputs(): DefineTokenCall__Outputs {
    return new DefineTokenCall__Outputs(this);
  }
}

export class DefineTokenCall__Inputs {
  _call: DefineTokenCall;

  constructor(call: DefineTokenCall) {
    this._call = call;
  }

  get _wiseToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uniswapPair(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DefineTokenCall__Outputs {
  _call: DefineTokenCall;

  constructor(call: DefineTokenCall) {
    this._call = call;
  }
}

export class ForwardLiquidityCall extends ethereum.Call {
  get inputs(): ForwardLiquidityCall__Inputs {
    return new ForwardLiquidityCall__Inputs(this);
  }

  get outputs(): ForwardLiquidityCall__Outputs {
    return new ForwardLiquidityCall__Outputs(this);
  }
}

export class ForwardLiquidityCall__Inputs {
  _call: ForwardLiquidityCall;

  constructor(call: ForwardLiquidityCall) {
    this._call = call;
  }
}

export class ForwardLiquidityCall__Outputs {
  _call: ForwardLiquidityCall;

  constructor(call: ForwardLiquidityCall) {
    this._call = call;
  }
}

export class GenerateSupplyCall extends ethereum.Call {
  get inputs(): GenerateSupplyCall__Inputs {
    return new GenerateSupplyCall__Inputs(this);
  }

  get outputs(): GenerateSupplyCall__Outputs {
    return new GenerateSupplyCall__Outputs(this);
  }
}

export class GenerateSupplyCall__Inputs {
  _call: GenerateSupplyCall;

  constructor(call: GenerateSupplyCall) {
    this._call = call;
  }

  get _investmentDay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GenerateSupplyCall__Outputs {
  _call: GenerateSupplyCall;

  constructor(call: GenerateSupplyCall) {
    this._call = call;
  }
}

export class PayoutInvestmentDayBatchCall extends ethereum.Call {
  get inputs(): PayoutInvestmentDayBatchCall__Inputs {
    return new PayoutInvestmentDayBatchCall__Inputs(this);
  }

  get outputs(): PayoutInvestmentDayBatchCall__Outputs {
    return new PayoutInvestmentDayBatchCall__Outputs(this);
  }
}

export class PayoutInvestmentDayBatchCall__Inputs {
  _call: PayoutInvestmentDayBatchCall;

  constructor(call: PayoutInvestmentDayBatchCall) {
    this._call = call;
  }

  get _investmentDay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _investorBatchFrom(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _investorBatchTo(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PayoutInvestmentDayBatchCall__Outputs {
  _call: PayoutInvestmentDayBatchCall;

  constructor(call: PayoutInvestmentDayBatchCall) {
    this._call = call;
  }
}

export class PayoutInvestorAddressCall extends ethereum.Call {
  get inputs(): PayoutInvestorAddressCall__Inputs {
    return new PayoutInvestorAddressCall__Inputs(this);
  }

  get outputs(): PayoutInvestorAddressCall__Outputs {
    return new PayoutInvestorAddressCall__Outputs(this);
  }
}

export class PayoutInvestorAddressCall__Inputs {
  _call: PayoutInvestorAddressCall;

  constructor(call: PayoutInvestorAddressCall) {
    this._call = call;
  }

  get _investorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PayoutInvestorAddressCall__Outputs {
  _call: PayoutInvestorAddressCall;

  constructor(call: PayoutInvestorAddressCall) {
    this._call = call;
  }

  get _payout(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PayoutReferralAddressCall extends ethereum.Call {
  get inputs(): PayoutReferralAddressCall__Inputs {
    return new PayoutReferralAddressCall__Inputs(this);
  }

  get outputs(): PayoutReferralAddressCall__Outputs {
    return new PayoutReferralAddressCall__Outputs(this);
  }
}

export class PayoutReferralAddressCall__Inputs {
  _call: PayoutReferralAddressCall;

  constructor(call: PayoutReferralAddressCall) {
    this._call = call;
  }

  get _referralAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PayoutReferralAddressCall__Outputs {
  _call: PayoutReferralAddressCall;

  constructor(call: PayoutReferralAddressCall) {
    this._call = call;
  }

  get _referralTokens(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PayoutReferralBatchCall extends ethereum.Call {
  get inputs(): PayoutReferralBatchCall__Inputs {
    return new PayoutReferralBatchCall__Inputs(this);
  }

  get outputs(): PayoutReferralBatchCall__Outputs {
    return new PayoutReferralBatchCall__Outputs(this);
  }
}

export class PayoutReferralBatchCall__Inputs {
  _call: PayoutReferralBatchCall;

  constructor(call: PayoutReferralBatchCall) {
    this._call = call;
  }

  get _referralBatchFrom(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _referralBatchTo(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PayoutReferralBatchCall__Outputs {
  _call: PayoutReferralBatchCall;

  constructor(call: PayoutReferralBatchCall) {
    this._call = call;
  }
}

export class PrepareReferralBonusesCall extends ethereum.Call {
  get inputs(): PrepareReferralBonusesCall__Inputs {
    return new PrepareReferralBonusesCall__Inputs(this);
  }

  get outputs(): PrepareReferralBonusesCall__Outputs {
    return new PrepareReferralBonusesCall__Outputs(this);
  }
}

export class PrepareReferralBonusesCall__Inputs {
  _call: PrepareReferralBonusesCall;

  constructor(call: PrepareReferralBonusesCall) {
    this._call = call;
  }

  get _referralBatchFrom(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _referralBatchTo(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PrepareReferralBonusesCall__Outputs {
  _call: PrepareReferralBonusesCall;

  constructor(call: PrepareReferralBonusesCall) {
    this._call = call;
  }
}

export class RequestRefundCall extends ethereum.Call {
  get inputs(): RequestRefundCall__Inputs {
    return new RequestRefundCall__Inputs(this);
  }

  get outputs(): RequestRefundCall__Outputs {
    return new RequestRefundCall__Outputs(this);
  }
}

export class RequestRefundCall__Inputs {
  _call: RequestRefundCall;

  constructor(call: RequestRefundCall) {
    this._call = call;
  }

  get _investor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _succesor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RequestRefundCall__Outputs {
  _call: RequestRefundCall;

  constructor(call: RequestRefundCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RequestTeamFundsCall extends ethereum.Call {
  get inputs(): RequestTeamFundsCall__Inputs {
    return new RequestTeamFundsCall__Inputs(this);
  }

  get outputs(): RequestTeamFundsCall__Outputs {
    return new RequestTeamFundsCall__Outputs(this);
  }
}

export class RequestTeamFundsCall__Inputs {
  _call: RequestTeamFundsCall;

  constructor(call: RequestTeamFundsCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RequestTeamFundsCall__Outputs {
  _call: RequestTeamFundsCall;

  constructor(call: RequestTeamFundsCall) {
    this._call = call;
  }
}

export class ReserveWiseCall extends ethereum.Call {
  get inputs(): ReserveWiseCall__Inputs {
    return new ReserveWiseCall__Inputs(this);
  }

  get outputs(): ReserveWiseCall__Outputs {
    return new ReserveWiseCall__Outputs(this);
  }
}

export class ReserveWiseCall__Inputs {
  _call: ReserveWiseCall;

  constructor(call: ReserveWiseCall) {
    this._call = call;
  }

  get _investmentDays(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }

  get _referralAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ReserveWiseCall__Outputs {
  _call: ReserveWiseCall;

  constructor(call: ReserveWiseCall) {
    this._call = call;
  }
}

export class ReserveWiseWithTokenCall extends ethereum.Call {
  get inputs(): ReserveWiseWithTokenCall__Inputs {
    return new ReserveWiseWithTokenCall__Inputs(this);
  }

  get outputs(): ReserveWiseWithTokenCall__Outputs {
    return new ReserveWiseWithTokenCall__Outputs(this);
  }
}

export class ReserveWiseWithTokenCall__Inputs {
  _call: ReserveWiseWithTokenCall;

  constructor(call: ReserveWiseWithTokenCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _investmentDays(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }

  get _referralAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ReserveWiseWithTokenCall__Outputs {
  _call: ReserveWiseWithTokenCall;

  constructor(call: ReserveWiseWithTokenCall) {
    this._call = call;
  }
}

export class RevokeAccessCall extends ethereum.Call {
  get inputs(): RevokeAccessCall__Inputs {
    return new RevokeAccessCall__Inputs(this);
  }

  get outputs(): RevokeAccessCall__Outputs {
    return new RevokeAccessCall__Outputs(this);
  }
}

export class RevokeAccessCall__Inputs {
  _call: RevokeAccessCall;

  constructor(call: RevokeAccessCall) {
    this._call = call;
  }
}

export class RevokeAccessCall__Outputs {
  _call: RevokeAccessCall;

  constructor(call: RevokeAccessCall) {
    this._call = call;
  }
}