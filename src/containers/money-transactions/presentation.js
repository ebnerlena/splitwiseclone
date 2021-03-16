import React, { useEffect } from 'react';

const MoneyTransaction = ({ users, moneyTransactions, onLoadData }) => {
  useEffect(() => { onLoadData(); }, []);
  return (
    <ul>
      { console.log(moneyTransactions, users) }
      { moneyTransactions?.map((transaction) => (
        <li key={transaction.id}>
          <span>
            Debitor:
            {users?.find((user) => user.id === transaction.debitorId)?.name}
          </span>
          <span>
            Creator:
            {users?.find((user) => user.id === transaction.creditorId)?.name}
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
