import isValidDate from '../../utils/isValidDate';
export default function bgVat(value) {
    let v = value;
    if (/^BG[0-9]{9,10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9,10}$/.test(v)) {
        return false;
    }
    let sum = 0;
    let i = 0;
    if (v.length === 9) {
        for (i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * (i + 1);
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
            for (i = 0; i < 8; i++) {
                sum += parseInt(v.charAt(i), 10) * (i + 3);
            }
        }
        sum = sum % 10;
        return `${sum}` === v.substr(8);
    }
    else if (v.length === 10) {
        const isEgn = (input) => {
            let year = parseInt(input.substr(0, 2), 10) + 1900;
            let month = parseInt(input.substr(2, 2), 10);
            const day = parseInt(input.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            }
            else if (month > 20) {
                year -= 100;
                month -= 20;
            }
            if (!isValidDate(year, month, day)) {
                return false;
            }
            const weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let s = 0;
            for (let j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = (s % 11) % 10;
            return `${s}` === input.substr(9, 1);
        };
        const isPnf = (input) => {
            const weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
            let s = 0;
            for (let j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = s % 10;
            return `${s}` === input.substr(9, 1);
        };
        const isVat = (input) => {
            const weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            let s = 0;
            for (let j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = 11 - s % 11;
            if (s === 10) {
                return false;
            }
            if (s === 11) {
                s = 0;
            }
            return `${s}` === input.substr(9, 1);
        };
        return isEgn(v) || isPnf(v) || isVat(v);
    }
    return false;
}
