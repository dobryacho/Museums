import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer-wrapper">
      <p className="footer-text">
      {t('footer')}
      </p>
    </div>
  );
}
