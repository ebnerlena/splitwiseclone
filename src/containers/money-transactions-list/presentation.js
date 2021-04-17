import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './MoneyTransactionList.module.scss';
import buttonStyles from '../../components/Button.module.scss';
import auth from '../../firebase';

const renderButton = (transaction, payBtnClick) => {
  if (transaction.paidAt) {
    return <Button id={transaction.id} disabled styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Paid</Button>;
  }
  return transaction.amount < 0
    ? <Button id={transaction.id} disabled styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Where is my money?</Button>
    : <Button id={transaction.id} onClick={payBtnClick} styles={[buttonStyles.button, buttonStyles.primary].join(' ')}>Pay now</Button>;
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
    <dl className={`${styles.list}`}>
      {moneyTransactions.map((transaction) => (
        <React.Fragment key={transaction.id}>
          <dt className={`${styles.item}`}>
            <span>{users?.find((user) => user.id === transaction.debitorId)?.name}</span>
            <span>
              Amount:
              {transaction.amount}
            </span>
            {renderButton(transaction, payBtnClick)}
          </dt>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default MoneyTransactionsList;
