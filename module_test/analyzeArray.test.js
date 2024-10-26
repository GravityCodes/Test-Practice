import analyzeArray from "../modules/analyzeArray";


describe('Properties contain correct value', () => {
    test("[1,8,3,4,2,6] => {average:4, min:1, max:8, length:6}", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average:4, min:1, max:8, length:6});
    });
});