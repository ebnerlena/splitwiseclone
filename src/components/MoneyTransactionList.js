import React from 'react';
import Button from './Button';
import styles from './MoneyTransactionList.module.scss';
import MoneyTransactions from '../data/MoneyTransaction.json';
import Users from '../data/User.json';

const payBtnClick = (ev) => {
  const date = new Date().toISOString();
  console.log(`id: ${ev.target.id}, paidAt: ${date}`);
  const btn = document.getElementById(ev.target.id);
  btn.disabled = true;
  btn.innerHTML = 'Paid';
};

const MoneyTransactionList = () => (

  <>
    <dl className={`${styles.list}`}>
      {MoneyTransactions.map((t) => (
        <React.Fragment key={t.id}>
          <dt className={`${styles.item}`}>
            <span>{Users[t.debitorId - 1].name}</span>
            <span>
              Amount:
              {t.amount}
            </span>
            {t.paidAt
              ? <Button id={t.id} disabled>Paid</Button>
              : <Button id={t.id} onClick={payBtnClick}>Pay now</Button>}
          </dt>
        </React.Fragment>
      ))}
    </dl>
  </>
);

export default MoneyTransactionList;
