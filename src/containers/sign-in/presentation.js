import React from 'react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';

const validationSchema = object({
  email: string().min(4).required().email(),
  password: string().min(6).required(),
});

const UserSignIn = ({ onSignIn }) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      const { email } = values;
      const pw = values.password;
      const submission = document.querySelector('#submission');
      submission.innerHTML = `Trying to login with: Email: ${email}, PW: ${pw}`;
      onSignIn(email, pw, history);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          inputName="email"
          labelText="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
        />
        <p>
          {formik.errors.email}
        </p>
        <PasswordInput
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
