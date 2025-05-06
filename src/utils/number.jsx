import Big from 'big.js';
import { every, first, isNaN, isNil, isNumber } from 'lodash-es';

export const convertToValidNumber = (val) => {
    let unformatNumber = val;
    if (typeof val === 'string') {
        unformatNumber = unformatNumber?.replaceAll(',', '');
    }
    if (isNil(unformatNumber) || unformatNumber === '' || isNaN(+unformatNumber)) {
        return '';
    } else {
        return +unformatNumber;
    }
};

export const minus = (...arr) => {
    const newArr = arr.map((num) => convertToValidNumber(num));
    if (!every(newArr, isNumber || !isNaN)) return '';
    return newArr.reduce((total, cur) => Number(new Big(total).minus(new Big(cur))));
};

export const plus = (...arr) => {
    const newArr = arr.map((num) => convertToValidNumber(num));
    if (!every(newArr, isNumber || !isNaN)) return '';
    return newArr.reduce((total, cur) => Number(new Big(total).plus(new Big(cur))));
};

export const mul = (...arr) => {
    const newArr = arr.map((num) => convertToValidNumber(num));
    if (!every(newArr, isNumber || !isNaN)) return '';
    if (newArr.some((num) => num === 0)) return 0;
    return newArr.reduce((total, cur) => Number(new Big(total).mul(new Big(cur))));
};

export const div = (...arr) => {
    const newArr = arr.map((num) => convertToValidNumber(num));
    if (!every(newArr, isNumber || !isNaN)) return '';
    if (first(newArr) === 0) return 0;
    if (newArr.some((num) => num === 0)) return '';
    return newArr.reduce((total, cur) => Number(new Big(total).div(new Big(cur))));
};

export const convertNumberThousandComma = (num) => {
    if (isNil(num) || isNaN(num) || num === '') return '';

    try {
        const number = new Big(num);
        const [intPart, decimalPart] = number.toString().split('.');

        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
    } catch (error) {
        console.error('Error formatting number:', error);
        console.error('Invalid number input:', num);
        return '';
    }
};
