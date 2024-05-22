import RecommendedMuseums from '../../components/RecommendedMuseums/RecommendedMuseums';
import AllNews from '../../components/AllNews/AllNews';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <RecommendedMuseums />
      <AllNews />
    </>
  );
}

export default Home;
