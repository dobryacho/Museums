import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchLogin } from '../../redux/thunkActions';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  email: '',
  password: '',
};

function Login() {
  const [inputs, setInputs] = useState(initialValue);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchLogin(inputs));
    navigate('/', { replace: true });
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={changeInputs}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={changeInputs}
        />
        <button type="submit">Войти</button>
      </form>
    </>
  );
}

export default Login;
