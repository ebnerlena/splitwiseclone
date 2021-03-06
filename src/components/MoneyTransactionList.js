import React from 'react';
import Button from './Button';
import MoneyTransactions from '../data/MoneyTransaction.json';
import Users from '../data/User.json';

const transactionsList = Array.from(MoneyTransactions);
console.log(transactionsList);

const MoneyTransactionList = () => (

  <>
    <h2>All Transactions</h2>
    <dl>
      {MoneyTransactions.map((t) => (
        <React.Fragment key={t.id}>
          <dt>
            <span>{Users[t.debitorId - 1].name}</span>
            <span>
              Amount:
              {t.amount}
            </span>
            {t.paidAt
              ? <Button disabled>Paid</Button>
              : <Button>Pay now</Button>}
          </dt>
        </React.Fragment>
      ))}
    </dl>
  </>
);

export default MoneyTransactionList;
