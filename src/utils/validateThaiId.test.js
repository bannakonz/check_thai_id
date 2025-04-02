import { test, expect } from "vitest";
import isValidIdCardNumber from "./validateThaiId.js";


test("validates idNo Thais citizen correctly", () => {
    expect(isValidIdCardNumber(1329900426318)).toBe(true);
    expect(isValidIdCardNumber("1329900426318")).toBe(true);
    expect(isValidIdCardNumber(1329900426317)).toBe(false);
    expect(isValidIdCardNumber(1329900426313)).toBe(false);
    expect(isValidIdCardNumber(1102700380514)).toBe(true);
    expect(isValidIdCardNumber(2310800027861)).toBe(true);
    expect(isValidIdCardNumber(8418119970782)).toBe(true);
    expect(isValidIdCardNumber(3814871783601)).toBe(false);
    expect(isValidIdCardNumber(381487178360233)).toBe(false);
    expect(isValidIdCardNumber("0123456789012")).toBe(false);
    expect(isValidIdCardNumber("12345abc789012")).toBe(false);
});
