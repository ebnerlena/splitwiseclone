import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import styles from './MoneyTransactionList.module.scss';
import buttonStyles from '../../components/Button.module.scss';
import { auth } from '../../firebase';

const renderButton = (transaction, payBtnClick) => {
  if (transaction.value.paidAt) {
    return <Button id={transaction.id} disabled styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Paid</Button>;
  }
  return transaction.value.amount < 0
    ? <Button id={transaction.key} disabled styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Where is my money?</Button>
    : <Button id={transaction.key} onClick={payBtnClick} styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Pay now</Button>;
};

const MoneyTransactionsList = ({
  users, moneyTransactions, onLoadData, onUpdateTransaction,
}) => {
  useEffect(() => { onLoadData(); }, []);
  const history = useHistory();

  useEffect(() => {
    if (auth.currentUser == null) {
      history.push('/sign-in');
    }
  }, []);

  console.log(users);
  console.log(moneyTransactions);

  const payBtnClick = (ev) => {
    const date = new Date().toISOString();
    console.log(`id: ${ev.target.id}, paidAt: ${date}`);
    const transaction = {
      id: ev.target.id,
      paidAt: date,
    };
    onUpdateTransaction(transaction);
  };
  if (!moneyTransactions) {
    return (
      <>
      </>
    );
  }
  return (
    <dl className={`${styles.list}`}>
      {moneyTransactions.map((transaction) => (
        <React.Fragment key={transaction.key}>
          <dt className={`${styles.item}`}>
            <span>{users[0]?.value.email}</span>
            <span>
              Amount:
              {transaction.value.amount}
            </span>
            {renderButton(transaction, payBtnClick)}
          </dt>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default MoneyTransactionsList;
