import React from 'react';
import { useFormik } from 'formik';
import { object, number } from 'yup';

import Button from './Button';
import DecimalInput from './DecimalInput';
import SelectInput from './SelectInput';
import Users from '../data/User.json';

const validationSchema = object({
  amount: number().positive(),
});

const MoneyTransactionCreate = () => {
  const formik = useFormik({
    initialValues: { userId: 0, amount: '0' },
    validationSchema,
    onSubmit: (values) => {
      const creditorId = (values.userId === 1 ? 2 : 1);
      console.log(`Trying to create amount: ${values.amount}, from User: ${creditorId} to User: ${values.userId}`);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
    </>
  );
};

export default MoneyTransactionCreate;
