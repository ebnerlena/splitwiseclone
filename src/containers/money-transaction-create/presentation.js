import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { object, number } from 'yup';
import styles from './MoneyTransactionCreate.module.scss';
import buttonStyles from '../../components/Button.module.scss';
import Button from '../../components/Button';
import DecimalInput from '../../components/DecimalInput';
import SelectInput from '../../components/SelectInput';
import RadioInput from '../../components/RadioInput';
import { auth } from '../../firebase';

const validationSchema = object({
  amount: number().positive(),
});

const MoneyTransactionCreate = ({
  users, onLoadData, onCreate,
}) => {
  useEffect(() => { onLoadData(); }, []);

  const formik = useFormik({
    initialValues: { userId: 1, amount: 0, selected: '0' },
    validationSchema,
    onSubmit: (values) => {
      const currentUser = users.find((user) => user.value.email === auth.currentUser.email);
      const transaction = {
        creditorId: currentUser.key,
        debitorId: values.userId === 1 ? users[0].key : values.userId,
        amount: values.selected === '0' ? values.amount : values.amount * (-1),
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
            styles={[buttonStyles.button, buttonStyles.primary].join(' ')}
          >
            {' '}
            Create
          </Button>
        </div>
      </form>
    </>
  );
};

export default MoneyTransactionCreate;
