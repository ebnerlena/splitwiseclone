import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

const renderTransaction = (transaction, currentUser, users, payBtnClick) => {
  if (transaction.value.creditorId === currentUser?.key) {
    return (
      <React.Fragment key={transaction.key}>
        <dt className={`${styles.item}`}>
          <span>{users[transaction.value.debitorId]?.email}</span>
          <span>
            Amount:
            {transaction.value.amount}
          </span>
          {renderButton(transaction, payBtnClick)}
        </dt>
      </React.Fragment>
    );
  }

  return <> </>;
};

const MoneyTransactionsList = ({
  usersArray, usersObjects, moneyTransactions, onLoadData, onUpdateTransaction,
}) => {
  useEffect(() => { onLoadData(); }, []);
  const history = useHistory();

  useEffect(() => {
    if (auth.currentUser == null) {
      history.push('/sign-in');
    }
  }, []);

  const currentUser = usersArray?.find((user) => user.value.email === auth.currentUser?.email);

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
        renderTransaction(transaction, currentUser, usersObjects, payBtnClick)
      ))}
    </dl>
  );
};

export default MoneyTransactionsList;
