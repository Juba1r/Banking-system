import  { useState } from 'react';
import './Banking.css';

const Banking = () => {
  const [balance, setBalance] = useState(0)

  const [amount, setAmount] = useState('')

  function Deposit() {
    const depositBy = parseFloat(amount)
    if (depositBy > 0) {
      setBalance(balance + depositBy)
      setAmount('')
    } 
  }
0
  function expanse() {
    const expanseBy = parseFloat(amount);
    if (expanseBy > 0 && expanseBy <= balance) {
      setBalance(balance - expanseBy)
      setAmount('')
    }
  }

  return (
    <div className="banking-container">

      <h1>Banking System</h1>

        <h3>Current Balance: ${balance}</h3>
        <br />

      <div className="input-container">

        

        <button className='button-48' onClick={Deposit}>Deposit</button> 
        <button className='button-48' onClick={expanse}>Expanse</button>


        


        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />



      </div>



    </div>
  )
}

export default Banking;
