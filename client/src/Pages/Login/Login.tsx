import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchLogin } from "../../redux/thunkActions";

const initialValue = {
  email: "",
  password: "",
};

function Login() {
  const [inputs, setInputs] = useState(initialValue);
  const dispatch = useAppDispatch();

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    dispatch(fetchLogin(inputs));
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="email" name="email" placeholder="E-mail" onChange={changeInputs} />
        <input type="password" name="password" placeholder="password" onChange={changeInputs} />
        <button type="submit">Войти</button>
      </form>
    </>
  );
}

export default Login;
