import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div>
        <Link to={'/'}>
          <button className={styles.link}>Главная</button>
        </Link>
        <Link to={'/allmuseums'}>
          <button className={styles.link}>Все музеи</button>
        </Link>
        {isAuthenticated ? (
          <Link to={'/profile'}>
            <button className={styles.link}>Личный кабинет</button>
          </Link>
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
