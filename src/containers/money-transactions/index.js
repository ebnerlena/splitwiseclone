import React, { useEffect, useState } from 'react';

export const useHTTP = (url) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => setResponse(json));
  }, []);

  return response;
};

const MoneyTransaction = () => {
  const moneyTransactions = useHTTP('http://localhost:3001/money-transaction');
  const users = useHTTP('http://localhost:3001/user');
  return (
    <ul>
      { moneyTransactions.map((transaction) => (
        <li key={transaction.id}>
          <span>
            Debitor:
            {users.find((user) => user.id === transaction.debitorId)?.name}
          </span>
          <span>
            Creator:
            {users.find((user) => user.id === transaction.creditorId)?.name}
          </span>
          <span>
            Amount:
            {transaction.amount}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MoneyTransaction;
