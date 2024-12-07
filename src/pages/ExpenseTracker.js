import React, { useState } from "react";
import "./../styles/ExpenseTracker.css";

const Transaction = ({ transaction }) => (
  <div className={`transaction ${transaction.type}`}>
    <span>{transaction.description}</span>
    <span>{transaction.amount} kgs</span>
  </div>
);

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = () => {
    if (!description || !amount) {
      return;
    }

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type,
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
  };

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="expense-tracker">
      <h1>Трекер доходов и расходов</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Сумма"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
        <button onClick={addTransaction}>Добавить транзакцию</button>
      </div>

      <div className="summary">
        <h2>Итоги:</h2>
        <div>
          <strong>Доходы: </strong>{income} ₽
        </div>
        <div>
          <strong>Расходы: </strong>{expense} ₽
        </div>
        <div>
          <strong>Баланс: </strong>{income - expense} ₽
        </div>
      </div>

      <div className="transactions">
        <h2>Список транзакций:</h2>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTracker;