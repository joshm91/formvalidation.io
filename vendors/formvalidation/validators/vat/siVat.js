export default function siVat(value) {
    const res = value.match(/^(SI)?([1-9][0-9]{7})$/);
    if (!res) {
        return false;
    }
    const v = res[1] ? value.substr(2) : value;
    const weight = [8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - sum % 11;
    if (sum === 10) {
        sum = 0;
    }
    return `${sum}` === v.substr(7, 1);
}
