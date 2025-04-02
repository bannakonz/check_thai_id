import './App.css'
import {useState} from "react";
import isValidIdCardNumber from "./utils/validateThaiId.js";

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


