import { useState } from "react";
import "./Banking.css";

const Banking = () => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [showD, setShowD] = useState(true);
  const [showE, setShowE] = useState(true);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  function Deposit() {
    const depositBy = parseFloat(amount);
    if (amount === "" || depositBy <= 0) {
      showNotification("Please enter a valid deposit amount.");
      return;
    }
    setBalance(balance + depositBy);
    setAmount("");
    setShowD(true);
    showNotification("Your deposit was successful!");
  }

  function Expanse() {
    const expanseBy = parseFloat(amount);
    if (amount === "" || expanseBy <= 0) {
      showNotification("Please enter a valid expense amount.");
      return;
    }
    if (expanseBy > balance) {
      showNotification("Insufficient balance for this expense.");
      return;
    }
    setBalance(balance - expanseBy);
    setAmount("");
    setShowE(true);
    showNotification("Your expense was recorded!");
  }

  function showNotification(message) {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: "" }), 3000);
  }

  return (
    <div className="banking-container">
      <h1>Banking System</h1>
      <div className="current-balance">Current Balance: ${balance}</div>
      <div className="input-container">
        <div className="button-group">
          <button className="button-52" onClick={() => setShowD(false)}>
            Deposit
          </button>
          <button className="button-52" onClick={() => setShowE(false)}>
            Expanse
          </button>
        </div>

        {!showD && (
          <div className="inptmodify-deposit">
            <h2>Deposit</h2>
            <div className="name-container">
              <label htmlFor="Name">Name : </label>
              <input type="text" placeholder="Enter the reason" />
            </div>

            <div className="amount-container">
              <label htmlFor="amount">Amount : </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <button className="submit-btn" onClick={Deposit}>
              Submit
            </button>
          </div>
        )}

        {!showE && (
          <div className="inptmodify-expanse">
            <h2>Expanse</h2>
            <div className="name-container">
              <label htmlFor="Name">Name : </label>
              <input type="text" placeholder="Enter the reason" />
            </div>

            <div className="amount-container">
              <label htmlFor="amount">Amount : </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>

            <button className="submit-btn" onClick={Expanse}>
              Submit
            </button>
          </div>
        )}
      </div>

      {notification.show && (
        <div
          className="notification"
          onClick={() => setNotification({ show: false, message: "" })}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Banking;
