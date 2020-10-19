let digits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    },
    teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    },
    dozens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    },
    hungred = 'hundred';

module.exports = function toReadable(number) {
    let newNumber = '';

    if (number >= 0 && number <= 99) {
        newNumber = getDozensNumber(number);
    }

    if (number >= 100 && number <= 999) {
        let hundredIntegerPart = Math.trunc(number / 100),
            remainderDivision = number % 100;
        if (number % 100 !== 0) {
            newNumber = digits[hundredIntegerPart] + ' ' + hungred + ' ' + getDozensNumber(remainderDivision);
        } else {
            newNumber = digits[hundredIntegerPart] + ' ' + hungred;
        }
    }

    return newNumber;
}

function getDozensNumber(number) {
    let someNumber;

    if (number >= 0 && number <= 9) {
        someNumber = digits[number];
    }
    if (number >= 10 && number <= 19) {
        someNumber = teens[number];
    }
    if (number >= 20 && number <= 99) {
        let remainderDivision,
            integerPart;

        if (number % 10 !== 0) {
            integerPart = Math.trunc(number / 10) * 10;
            remainderDivision = number % 10;
            someNumber = dozens[integerPart] + ' ' + digits[remainderDivision];
        } else {
            someNumber = dozens[number];
        }
    }

    return someNumber;
}
