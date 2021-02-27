module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    if (number < 20) return uniqueNumbers[number];

    const numbers = number.toString().split("");
    let result = "";

    if (numbers.length === 2) {
        result = `${tensNames[numbers[0]]} ${
            +numbers[1] !== 0 ? uniqueNumbers[numbers[1]] : ""
        }`;
    } else {
        result = `${uniqueNumbers[numbers[0]]} ${hundred} `;
        if (+numbers[1] < 2) {
            if (+numbers[1] === 0) {
                if (+numbers[2] !== 0) {
                    result += uniqueNumbers[numbers[2]];
                }
            } else {
                result += uniqueNumbers[numbers[1] + numbers[2]];
            }
        } else {
            result += `${tensNames[numbers[1]]} `;
            if (+numbers[2] === 0) {
                result += "";
            } else {
                result += uniqueNumbers[numbers[2]];
            }
        }
    }

    return result.trim();
};

const hundred = "hundred";
const uniqueNumbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
};

const tensNames = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};
