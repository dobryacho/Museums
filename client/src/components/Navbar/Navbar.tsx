import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchLogout } from '../../redux/thunkActions';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userSlice.user.email);

  const logoutHandle = () => {
    dispatch(fetchLogout());
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div>{user}</div>
        <Link to={'/'}>
          <button className={styles.link}> Главная</button>
        </Link>
        <Link to={'/allmuseums'}>
          <button className={styles.link}>Все музеи</button>
        </Link>
        {user ? (
          <>
            <Link to={'/profile'}>
              <button className={styles.link}>Личный кабинет</button>
            </Link>
            <button onClick={logoutHandle} className={styles.link}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to={'/register'}>
              <button className={styles.link}>Регистрация</button>
            </Link>
            <Link to={'/login'}>
              <button className={styles.link}>Войти</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
