import React from 'react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import Button from './Button';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

const validationSchema = object({
  username: string().min(4).required(),
  password: string().min(6).required(),
});

const UserSignIn = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      const submission = document.querySelector('#submission');
      submission.innerHTML = `Trying to login with: Username: ${values.username}, PW: ${values.password}`;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          type="text"
          inputName="username"
          labelText="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
          id="username"
        />
        <p>
          {formik.errors.username}
        </p>
        <PasswordInput
          type="password"
          id="password"
          inputName="password"
          labelText="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p>
          {formik.errors.password}
        </p>
        <Button type="submit" onClick={formik.handleSubmit} disabled={!(formik.isValid && formik.dirty)}>Sign In</Button>
      </form>
      <p id="submission"> </p>
    </div>
  );
};

export default UserSignIn;
