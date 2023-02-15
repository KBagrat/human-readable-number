module.exports = function toReadable(number) {
    let obj = {
        0: "zero",
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
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "one thousend"
    };

    let result = [];
    let num = number;
    let num_2 = Number(String(number).split("").splice(-2).join(""));
    if (num_2 in obj) {
        result.push(num_2);
    } else {
        result.push(num_2 % 10);
        result.push(num_2 - (num_2 % 10));
    }
    let num_3;
    let num_31;
    if ((num - num_2) !== 0) {
        num_3 = num - num_2;
        result.push(100);
        num_31 = result.push((num_3 % 1000) / 100);
    } else {
        return result.reverse().map(el => obj[el]).join(" ");
    }

    if ((num_3 - (num_3 % 1000)) !== 0) {
        let num_4 = num_3 - (num_3 % 1000);
        result.push(num_4);
    } else {
        return result.reverse().filter(el => el !== 0).map(el => obj[el]).join(" ");
    }
    console.log(result);
    return result.reverse().map(el => obj[el]).join(" ");
};
