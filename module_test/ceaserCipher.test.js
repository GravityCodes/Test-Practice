import ceaserFunction from "../modules/ceaserCipher.js";

describe('Strings get shifted with shift factor', () => {
    test(' ("abc", 3) => "def" ', () => {
        expect(ceaserFunction('abc', 3)).toBe('def');
    });
    test(' ("hello", 5) => "mjqqt" ', () => {
        expect(ceaserFunction('hello', 5)).toBe('mjqqt');
    });
});

describe('Strings wrap from z to a', () => {
    test(' ("xyz", 3) => "abc" ', () => {
        expect(ceaserFunction('xyz', 3)).toBe('abc');
    });
    test(' ("today", 10) => "dynki"', () => {
        expect(ceaserFunction('today', 10)).toBe('dynki');
    });
    test(' ("XYZ", 3) => "ABC" ', ()  => {
        expect(ceaserFunction('XYZ', 3)).toBe('ABC');
    });
    test(' ("TODAY", 10) => "DYNKI" ', () => {
        expect(ceaserFunction('TODAY', 10)).toBe('DYNKI');
    });
});

describe('Shifted letter case remains the same', () => {
    test(' ("HeLLo", 3) => "KhOOr" ', () => {
        expect(ceaserFunction('HeLLo', 3)).toBe('KhOOr')
    });
});

describe('Non-alphabetical characters remain unchanged', () => {
    test(' ("Hello, World!, 3) => "Khoor, Zruog!" ', () => {
        expect(ceaserFunction('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});