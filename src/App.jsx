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
            <h1>Verify National ID Card</h1>
        </header>
        <main>
            <section>
                <input
                    id="idCardNumber"
                    type="text"
                    value={idCardNumber}
                    placeholder="Enter National ID Card Number"
                    maxLength={13}
                    onChange={handleIdCardChange}
                />
                <p id="idCardStatus" className={isValid ? 'valid' : 'invalid'}>
                    {idCardNumber.length === 13
                        ? (isValid ? 'The ID card number is valid.' : 'The ID card number is invalid.')
                        : 'Please enter a valid 13-digit ID card number.'}
                </p>
            </section>
        </main>
    </>
  )
}

export default App;


