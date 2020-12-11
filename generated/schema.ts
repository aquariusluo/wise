// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Wise extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Wise entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Wise entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Wise", id.toString(), this);
  }

  static load(id: string): Wise | null {
    return store.get("Wise", id) as Wise | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get investmentDay(): BigInt {
    let value = this.get("investmentDay");
    return value.toBigInt();
  }

  set investmentDay(value: BigInt) {
    this.set("investmentDay", Value.fromBigInt(value));
  }

  get randomSupply(): BigInt {
    let value = this.get("randomSupply");
    return value.toBigInt();
  }

  set randomSupply(value: BigInt) {
    this.set("randomSupply", Value.fromBigInt(value));
  }
}
