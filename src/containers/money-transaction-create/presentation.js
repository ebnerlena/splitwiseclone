import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { object, number } from 'yup';
import styles from './MoneyTransactionCreate.module.scss';
import Button from '../../components/Button';
import DecimalInput from '../../components/DecimalInput';
import SelectInput from '../../components/SelectInput';
import RadioInput from '../../components/RadioInput';

const validationSchema = object({
  amount: number().positive(),
});

let creditorId = 1;

const MoneyTransactionCreate = ({
  users, moneyTransactions, onLoadData, onCreate,
}) => {
  useEffect(() => { onLoadData(); }, []);

  const formik = useFormik({
    initialValues: { userId: 1, amount: '0', selected: '0' },
    validationSchema,
    onSubmit: (values) => {
      creditorId = (values.userId === 1 ? 2 : 1);
      const divEl = document.querySelector('#submission');
      divEl.innerHTML = `Trying to create amount: ${values.amount}, from User: ${users[creditorId - 1].name} to User: ${users[values.userId - 1].name}`;
      console.log(`Trying to create amount: ${values.amount}, from User: ${users[creditorId - 1].name} to User: ${users[values.userId - 1].name} selected: ${values.selected}`);
      const transaction = {
        id: moneyTransactions[moneyTransactions.length - 1].id + 1,
        creditorId,
        debitorId: Number(values.userId),
        amount: values.selected === '0' ? values.amount : `-${values.amount}`,
        paidAt: null,
      };
      onCreate(transaction);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={`${styles.createForm}`}>
        <div className={`${styles.toogleContainer}`}>
          <RadioInput
            inputName="selected"
            labelText="I owe somebody"
            onChange={formik.handleChange}
            checked={formik.values.selected === '0'}
            id="owe"
            value="0"
          />
          <RadioInput
            inputName="selected"
            labelText="Somebody owes me"
            onChange={formik.handleChange}
            checked={formik.values.selected === '1'}
            id="debt"
            value="1"
          />
        </div>
        <div className={`${styles.userAmountContainer}`}>
          <SelectInput
            options={users}
            inputName="userId"
            labelText="User"
            onChange={formik.handleChange}
            id="userId"
            value={formik.values.userId}
          />
          <DecimalInput
            inputName="amount"
            labelText="Amount"
            onChange={formik.handleChange}
            value={formik.values.amount}
            id="amount"
          />
          <Button
            onClick={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
          >
            {' '}
            Create
          </Button>
        </div>
        <div id="submission" />
      </form>
    </>
  );
};

export default MoneyTransactionCreate;
