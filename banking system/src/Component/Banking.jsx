import { useState } from 'react';
import './Banking.css';

const Banking = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');

  function Deposit() {
    const depositBy = parseFloat(amount);
    if (depositBy > 0) {
      setBalance(balance + depositBy);
      setAmount('');
    }
  }

  function expanse() {
    const expanseBy = parseFloat(amount);
    if (expanseBy > 0 && expanseBy <= balance) {
      setBalance(balance - expanseBy);
      setAmount('');
    }
  }

  return (
    <div className="banking-container">
      <h1>Banking System</h1>
      <div className="current-balance">Current Balance: ${balance}</div>
      <div className="input-container">
        <div className="button-group">
          <button className="button-52" onClick={Deposit}>Deposit</button>
          <button className="button-52" onClick={expanse}>Expanse</button>
        </div>

        <div className="inptmodify">


        <div className="name-container">

<label htmlFor="Name">Name : </label>
<br />

<input type="Name" placeholder='Enter the reason'/>
</div>
          
          <div className="amount-container">

          <label htmlFor="amount">Amount : </label>
          <br />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banking;
