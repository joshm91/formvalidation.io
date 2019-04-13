import isValidDate from '../../utils/isValidDate';
export default function ltId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
        return false;
    }
    const gender = parseInt(value.charAt(0), 10);
    let year = parseInt(value.substr(1, 2), 10);
    const month = parseInt(value.substr(3, 2), 10);
    const day = parseInt(value.substr(5, 2), 10);
    const century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
    year = century * 100 + year;
    if (!isValidDate(year, month, day, true)) {
        return false;
    }
    let weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    let sum = 0;
    let i;
    for (i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum !== 10) {
        return `${sum}` === value.charAt(10);
    }
    sum = 0;
    weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    for (i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 0;
    }
    return `${sum}` === value.charAt(10);
}
