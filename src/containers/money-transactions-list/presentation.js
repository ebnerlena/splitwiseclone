import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import styles from './MoneyTransactionList.module.scss';
import buttonStyles from '../../components/Button.module.scss';
import { auth } from '../../firebase';
import { selectTransactionById, selectTransactions } from '../../reducers/money-transaction-reducer';

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
  const loadingStatus = useSelector((state) => state.moneyTransactions.status);
  // const [status, setStatus] = useState('idle') oder so
  const transactions = selectTransactions(moneyTransactions);

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    );
  }

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
      {transactions.map((transaction) => (
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
