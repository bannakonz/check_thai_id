export default function isValidIdCardNumber(idNumber) {
    let idLength = idNumber.toString().length;
    let numForMultiple = idNumber.toString().substring(0, idLength - 1);
    let lastNumber = String(idNumber).charAt(12);
    let n = 13;
    let sum = 0;

    for (let i = 0; i < numForMultiple.length ; i++ ) {
        sum = sum + (+numForMultiple.charAt(i) * (n));
        n--;
    }

    let initial = 11;
    let remainder = sum%initial;
    // let checkDigit = initial - remainder;
    let checkDigit = (initial - remainder) % 10;

    return Number(lastNumber) === checkDigit;
}
