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
  function Withdraw() {
    const withdrawBy = parseFloat(amount);
    if (withdrawBy > 0 && withdrawBy <= balance) {
      setBalance(balance - withdrawBy)
      setAmount('')
    }
  }

  return (
    <div className="banking-container">

      <h1>Banking System</h1>

      <div className="input-container">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <button onClick={Deposit}>Deposit</button>
        <button onClick={Withdraw}>Withdraw</button>


      </div>


      <h3>Current Balance: ${balance}</h3>

    </div>
  )
}

export default Banking;
