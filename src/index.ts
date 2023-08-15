/**
 * A script which analyzes the difference in size between a JSON and ProtoBuf payload.
 * 
 * To run:
 *  0. Execute command: npm install
 *  1. Execute command: npm run start
 */

import { Color, Person } from "./lib/proto-generated/sample.js";

const simplePerson = {
  id: "test-01",
  name: "Ferdinand the Bull",
  ageInYears: 12,
  netWorth: 15123.37,
  isBrave: true,
  favorite: Color.GREEN,
};

const asJson = JSON.stringify( simplePerson );
const jsonLengthBytes = (new TextEncoder().encode(asJson)).length;

const asProtoBuf = Person.encode( Person.fromJSON( simplePerson ) ).finish();
const protoBufLengthBytes = asProtoBuf.byteLength;

console.log(`JSON: ${jsonLengthBytes} bytes`);
console.log(`Proto: ${protoBufLengthBytes} bytes`);

console.log(`Total Size Difference (ProtoBuf of JSON): ${Math.round(protoBufLengthBytes / jsonLengthBytes * 100 )}%`)
