import React, { useEffect } from 'react'; // useState

import { useFormik } from 'formik';
import { object, string } from 'yup';

import Button from './Button';
import Input from './Input';

// custom hook here
// const [values, setValue] = useForm({ username: '' , password: ''})
// const useForm = (values) => {
//   const [username, setUsername] = useState(values.username);
//   const [password, setPassword] = useState(values.password);

//   const setValue = (prop) => {
//     if(prop == 'username'){
//       return setUsername
//     } else if(prop == 'password'){
//       return setPassword
//     }
//   }

//   return [{username, password}, setValue]
// }

const validationSchema = object({
  username: string().min(3),
  password: string().min(6),
});

const UserSignUp = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => { console.log('render on mount'); }, []);
  useEffect(() => { console.log('render on rerender'); });
  useEffect(() => { console.log('render on username change'); }, [formik.values.username]);

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [{username, password}, setValue] = useForm({username: 'user', password: 'geheim'})

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

export default UserSignUp;
