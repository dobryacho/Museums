import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <p className={styles.text}>{t('footer')}</p>
      </div>
    </div>
  );
}
