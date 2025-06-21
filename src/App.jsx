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
        // let checkDigit = initial - remainder;
        let checkDigit = (initial - remainder) % 10;

        return Number(lastNumber) === checkDigit;
  }

  return (
    <>
        <header>
            <h1 className="title">ตรวจสอบเลขบัตรประชาชน ง่ายและรวดเร็ว</h1>
            <p className="description">ระบบของเราไม่มีการบันทึกหมายเลขบัตรประชาชน</p>
        </header>
        <main>
                <div className="card">
                    <img className="card-image__id" src="/id-card-thai.svg" alt="id-card-image" />
                    <input
                        id="idCardNumber"
                        type="text"
                        value={idCardNumber}
                        placeholder="เลขบัตรประชาชน"
                        maxLength={13}
                        onChange={handleIdCardChange}
                    />
                    <p id="idCardStatus" className={isValid ? 'valid' : 'invalid'}>
                        {idCardNumber.length === 13
                            ? (isValid ? 'หมายเลขบัตรประชาชนถูกต้อง' : 'หมายเลขบัตรประชาชนไม่ถูกต้อง')
                            : ''}
                    </p>
                </div>

        </main>
    </>
  )
}

export default App;


