import React from 'react';

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

const UserSignUp = ({ auth, onSignUp }) => {
  const history = useHistory();
  const authErrorMessage = auth.reverse().find((e) => e.signUpError);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      const { email } = values;
      const pw = values.password;
      onSignUp(email, pw, history);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="auth-form">
        <TextInput
          type="text"
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
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          disabled={!(formik.isValid && formik.dirty)}
          styles={[buttonStyles.button, buttonStyles.primary].join(' ')}
        >
          Sign Up
        </Button>
      </form>
      <p>
        {' '}
        {authErrorMessage?.signUpError}
      </p>
      <Link to="/sign-in" className="link">
        Already have an account? Sign In here
      </Link>
    </div>
  );
};

export default UserSignUp;
