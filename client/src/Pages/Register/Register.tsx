import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchReg } from '../../redux/thunkActions';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
} from '@chakra-ui/react';

const ERROR_MASSEGE_COLOR = '#ff6d6d';

const initialValue = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  city: 'moscow',
  phone: '',
};

function Register() {
  const { t } = useTranslation();

  const [inputs, setInputs] = useState(initialValue);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userSlice.user);
  const navigate = useNavigate();

  const changeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchReg(inputs));
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
            type="email"
            name="email"
            placeholder="E-mail *"
            required
            onChange={changeInputs}
          />
          <Input
            type="password"
            name="password"
            placeholder="password *"
            required
            onChange={changeInputs}
          />
          <Input
            type="text"
            name="firstName"
            placeholder="First name *"
            required
            onChange={changeInputs}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name *"
            required
            onChange={changeInputs}
          />
          <Select name="city" id="city" onChange={changeInputs}>
            <option value="moscow" selected>
            {t('moscow')}
            </option>
            <option value="petersburg">{t('spb')}</option>
          </Select>
          <InputGroup>
            <InputLeftAddon>+7</InputLeftAddon>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone number"
              onChange={changeInputs}
            />
          </InputGroup>
          <Button type="submit">{t('register')}</Button>
          <p>
            <b style={{ color: ERROR_MASSEGE_COLOR }}>{user.err}</b>
          </p>
        </Stack>
      </form>
    </>
  );
}

export default Register;
