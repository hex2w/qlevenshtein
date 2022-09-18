import assert from "assert";
import { distance } from "../build/debug.js";
assert.strictEqual(distance("hello", "hollow"), 2);
console.log("ok");
