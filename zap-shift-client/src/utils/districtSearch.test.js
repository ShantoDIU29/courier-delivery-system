import assert from "node:assert/strict";
import test from "node:test";

import { filterDistricts, getUniqueDistricts } from "./districtSearch.js";

const serviceCenters = [
  { district: "Dhaka" },
  { district: "Dhaka" },
  { district: "Chattogram" },
  { district: "Cumilla" },
  { district: "Khulna" },
];

test("keeps only unique districts", () => {
  assert.deepEqual(getUniqueDistricts(serviceCenters), [
    "Dhaka",
    "Chattogram",
    "Cumilla",
    "Khulna",
  ]);
});

test("matches district names case-insensitively", () => {
  assert.deepEqual(filterDistricts(serviceCenters, "chat"), ["Chattogram"]);
  assert.deepEqual(filterDistricts(serviceCenters, "dh"), ["Dhaka"]);
});
