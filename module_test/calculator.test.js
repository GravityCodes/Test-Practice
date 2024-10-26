import {calculator} from "../modules/calculator.js";

describe("Operations function", () => {
    test("add(1,1) => 2", () => {
        expect(calculator.add(1,1)).toEqual(2);
    });
    test("subtract(1,1) => 0", () => {
        expect(calculator.subtract(1,1)).toEqual(0);
    });
    test("divide(4,2) => 2", () => {
        expect(calculator.divide(4,2)).toEqual(2);
    });
    test("multiply(2,2 => 4", () => {
        expect(calculator.multiply(2,2)).toEqual(4);
    });
});