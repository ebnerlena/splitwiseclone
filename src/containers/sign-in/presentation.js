import React, { useState } from 'react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import { useHistory, Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import buttonStyles from '../../components/Button.module.scss';

const validationSchema = object({
  email: string().min(4).required().email(),
  password: string().min(6).required(),
});

const UserSignIn = ({ auth, onSignIn }) => {
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const authErrorMessage = auth.reverse().find((e) => e.signInError);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      const { email } = values;
      const pw = values.password;
      setMessage(`Trying to login with: Email: ${email}, PW: ${pw}`);
      onSignIn(email, pw, history);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="auth-form">
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
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!(formik.isValid && formik.dirty)}
          styles={[buttonStyles.button, buttonStyles.primary].join(' ')}
        >
          Sign In
        </Button>
      </form>
      { message && <div>{message}</div> }
      <p id="error">
        {' '}
        {authErrorMessage?.signInError}
      </p>
      <Link to="/sign-up" className="link">
        Sign up here
      </Link>
    </div>
  );
};

export default UserSignIn;
