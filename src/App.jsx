import './App.css'
import {useState} from "react";

function App() {
  const [idCardNumber, setIdCardNumber] = useState('');
  const [isValid, setValid] = useState(null);

    function handleIdCardChange(e) {
        e.preventDefault();
        const newValue = e.target.value;
        setIdCardNumber(newValue);

        if (newValue.length === 13) {
            let isValidCard = isValidIdCardNumber(newValue);
            setValid(isValidCard);
        } else {
            setValid(null);
        }
    }

  function isValidIdCardNumber(idNumber) {
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
        let checkDigit = initial - remainder;

        return Number(lastNumber) === checkDigit;
  }

  return (
    <>
        <h1>ตรวจสอบบัตรประชาชน</h1>
        <input value={idCardNumber} placeholder={'กรอกเลขบัตรประชาชน'} maxLength={13} onChange={handleIdCardChange} />
        {idCardNumber.length === 13 && (isValid ? <p>ถูก</p> : <p>ผิด</p>)}
    </>
  )
}

export default App;


