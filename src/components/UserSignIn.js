import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import Button from './Button';
import Input from './Input';

const validationSchema = object({
  username: string().min(3),
  password: string().min(6),
});

const UserSignIn = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => { console.log('render on mount'); }, []);
  useEffect(() => { console.log('render on rerender'); });
  useEffect(() => { console.log('render on username change'); }, [formik.values.username]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          inputName="username"
          labelText="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username}
        <br />
        <Input
          type="password"
          inputName="password"
          labelText="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password}
        <br />
        <Button type="submit" disabled={(!formik.isValid)}>Sign up</Button>
      </form>
    </div>
  );
};

export default UserSignIn;
