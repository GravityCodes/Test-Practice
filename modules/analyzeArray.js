export default function analyzeArray(arr){

    let lengthNum = arr.length;
    let averageNum = arr.reduce(
        (accumulator,currentValue) => accumulator + currentValue, 0
    ) / lengthNum;
    let minNum = arr.reduce(
        (previousNum, currentNum) => currentNum < previousNum ? currentNum : previousNum
    );
    let maxNum = arr.reduce(
        (previousNum, currentNum) => currentNum > previousNum ? currentNum : previousNum
    );
    

    return {
        average: averageNum,
        min: minNum,
        max: maxNum,
        length: lengthNum
    }
}
