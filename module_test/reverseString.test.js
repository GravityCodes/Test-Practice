import reverseString from "../modules/reverseString.js";

describe("Single strings are reversed", () => {
    test("hello => olleh", () => {
        expect(reverseString("hello")).toMatch("olleh");
    });
});

