/* eslint eqeqeq: "off" */
import React from 'react';
import { useFormik } from 'formik';
import { object, number } from 'yup';
import styles from './MoneyTransactionCreate.module.scss';

import Button from './Button';
import DecimalInput from './DecimalInput';
import SelectInput from './SelectInput';
import Users from '../data/User.json';

const validationSchema = object({
  amount: number().positive(),
});

let creditorId = 1;

const MoneyTransactionCreate = () => {
  const formik = useFormik({
    initialValues: { userId: 1, amount: '0' },
    validationSchema,
    onSubmit: (values) => {
      creditorId = (values.userId == 1 ? 2 : 1);
      const divEl = document.querySelector('#submission');
      divEl.innerHTML = `Trying to create amount: ${values.amount}, from User: ${creditorId} to User: ${values.userId}`;
      console.log(`Trying to create amount: ${values.amount}, from User: ${creditorId} to User: ${values.userId}`);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={`${styles.createForm}`}>
        <SelectInput
          options={Users}
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
      </form>
      <div id="submission" />
    </>
  );
};

export default MoneyTransactionCreate;
