export default function beVat(value) {
    let v = value;
    if (/^BE[0]?[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0]?[0-9]{9}$/.test(v)) {
        return false;
    }
    if (v.length === 9) {
        v = `0${v}`;
    }
    if (v.substr(1, 1) === '0') {
        return false;
    }
    const sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
    return sum % 97 === 0;
}
