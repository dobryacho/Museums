import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchLogin } from '../../redux/thunkActions';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Stack } from '@chakra-ui/react';

const ERROR_MASSEGE_COLOR = '#ff6d6d';

const initialValue = {
  email: '',
  password: '',
};

function Login() {
  const [inputs, setInputs] = useState(initialValue);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userSlice.user);
  const navigate = useNavigate();

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchLogin(inputs));
  };

  useEffect(() => {
    if (user.email) {
      navigate('/', { replace: true });
    }
  }, [user]);

  return (
    <>
      <form onSubmit={submitForm} style={{display:'flex',justifyContent:'center'}}>
        <Stack spacing={3} width={350}>
          <Input
            required
            type="email"
            name="email"
            placeholder="E-mail *"
            onChange={changeInputs}
          />
          <Input
            required
            type="password"
            name="password"
            placeholder="password *"
            onChange={changeInputs}
          />
          <Button type="submit">Войти</Button>
          <p>
            <b style={{ color: ERROR_MASSEGE_COLOR }}>{user.err}</b>
          </p>
        </Stack>
      </form>
    </>
  );
}

export default Login;
