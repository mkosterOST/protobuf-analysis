/* eslint-disable */
import m0 from 'protobufjs/minimal.js';
const { Reader, Writer } = m0;

export const protobufPackage = "";

export enum Color {
  RED = 0,
  BLUE = 1,
  GREEN = 2,
  UNRECOGNIZED = -1,
}

export function colorFromJSON(object: any): Color {
  switch (object) {
    case 0:
    case "RED":
      return Color.RED;
    case 1:
    case "BLUE":
      return Color.BLUE;
    case 2:
    case "GREEN":
      return Color.GREEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Color.UNRECOGNIZED;
  }
}

export function colorToJSON(object: Color): string {
  switch (object) {
    case Color.RED:
      return "RED";
    case Color.BLUE:
      return "BLUE";
    case Color.GREEN:
      return "GREEN";
    case Color.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A very simple protobuf representaion of a person.  *
 * Meant only for use in exercises.
 */
export interface Person {
  id: string;
  name?: string | undefined;
  ageInYears: number;
  netWorth: number;
  isBrave: boolean;
  favorite: Color;
}

function createBasePerson(): Person {
  return { id: "", name: undefined, ageInYears: 0, netWorth: 0, isBrave: false, favorite: 0 };
}

export const Person = {
  encode(message: Person, writer: m0.Writer = Writer.create()): m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.ageInYears !== 0) {
      writer.uint32(24).int32(message.ageInYears);
    }
    if (message.netWorth !== 0) {
      writer.uint32(33).double(message.netWorth);
    }
    if (message.isBrave === true) {
      writer.uint32(40).bool(message.isBrave);
    }
    if (message.favorite !== 0) {
      writer.uint32(48).int32(message.favorite);
    }
    return writer;
  },

  decode(input: m0.Reader | Uint8Array, length?: number): Person {
    const reader = input instanceof Reader ? input : Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ageInYears = reader.int32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.netWorth = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isBrave = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.favorite = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Person {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      ageInYears: isSet(object.ageInYears) ? Number(object.ageInYears) : 0,
      netWorth: isSet(object.netWorth) ? Number(object.netWorth) : 0,
      isBrave: isSet(object.isBrave) ? Boolean(object.isBrave) : false,
      favorite: isSet(object.favorite) ? colorFromJSON(object.favorite) : 0,
    };
  },

  toJSON(message: Person): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.ageInYears !== 0) {
      obj.ageInYears = Math.round(message.ageInYears);
    }
    if (message.netWorth !== 0) {
      obj.netWorth = message.netWorth;
    }
    if (message.isBrave === true) {
      obj.isBrave = message.isBrave;
    }
    if (message.favorite !== 0) {
      obj.favorite = colorToJSON(message.favorite);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Person>, I>>(base?: I): Person {
    return Person.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Person>, I>>(object: I): Person {
    const message = createBasePerson();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.ageInYears = object.ageInYears ?? 0;
    message.netWorth = object.netWorth ?? 0;
    message.isBrave = object.isBrave ?? false;
    message.favorite = object.favorite ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
