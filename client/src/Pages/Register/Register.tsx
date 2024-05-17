import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchReg } from '../../redux/thunkActions';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  city: 'moscow',
  phone: '',
};

function Register() {
  const [inputs, setInputs] = useState(initialValue);
  const dispatch = useAppDispatch();
  const userErrors = useAppSelector((store) => store.userSlice.user.err);
  const navigate = useNavigate();

  const changeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchReg(inputs));
    navigate('/', { replace: true });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={changeInputs}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={changeInputs}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          required
          onChange={changeInputs}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          onChange={changeInputs}
        />
        <select name="city" id="city" onChange={changeInputs}>
          <option value="moscow" selected>
            Москва
          </option>
          <option value="petersburg">Санкт-Петербург</option>
        </select>
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          onChange={changeInputs}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>{userErrors}</p>
    </>
  );
}

export default Register;
