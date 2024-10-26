import capitalize from "../modules/capitalize";

describe('First letter of single string capitalize', () => {
    test('abc => Abc', () => {
        expect(capitalize("abc")).toMatch("Abc");
    });
    test('hello => Hello', () => {
        expect(capitalize("hello")).toMatch("Hello");
    });
});