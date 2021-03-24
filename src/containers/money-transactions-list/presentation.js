import React, { useEffect } from 'react';
import Button from '../../components/Button';
import styles from './MoneyTransactionList.module.scss';

const MoneyTransactionsList = ({
  users, moneyTransactions, onLoadData, onUpdateTransaction,
}) => {
  useEffect(() => { onLoadData(); }, []);

  const payBtnClick = (ev) => {
    const date = new Date().toISOString();
    console.log(`id: ${ev.target.id}, paidAt: ${date}`);
    const transaction = {
      id: ev.target.id,
      paidAt: date,
    };
    onUpdateTransaction(transaction);
  };

  return (
    <>
      <dl className={`${styles.list}`}>
        {moneyTransactions.map((transaction) => (
          <React.Fragment key={transaction.id}>
            <dt className={`${styles.item}`}>
              <span>{users?.find((user) => user.id === transaction.debitorId)?.name}</span>
              <span>
                Amount:
                {transaction.amount}
              </span>
              {transaction.paidAt
                ? <Button id={transaction.id} disabled>Paid</Button>
                : <Button id={transaction.id} onClick={payBtnClick}>Pay now</Button>}
            </dt>
          </React.Fragment>
        ))}
      </dl>
    </>
  );
};

export default MoneyTransactionsList;
