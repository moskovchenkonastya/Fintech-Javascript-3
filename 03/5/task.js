/**
 * Изменить поведение чисел таким образом, чтобы указанные конструкции были эквивалетны при условии,
 * что римские цифры могут быть любыми.
 * 0..V => [0, 1, 2, 3, 4]
 * 0..VII => [0, 1, 2, 3, 4, 5, 6]
 * 0..X => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Подсказка - необходимо использовать Proxy - объекты
 * */
const romanDigit = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
};

function arabicDigit(number) {
    return number.match(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/g).reduce((result, digit) => result + romanDigit[digit], 0);
}
const myProto = Object.getPrototypeOf(Number.prototype);
const proxy = new Proxy(myProto, {
    get: (target, prop) => (prop in target ? target.prop : [...Array(arabicDigit(prop)).keys()])
});
Object.setPrototypeOf(Number.prototype, proxy);
