import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

import { useTranslation } from 'react-i18next';

type NewsType = {
  id: number;
  title: string;
  text: string;
  museumId: number;
  museumName: string;
  museumLocation: string;
  photo: string;
  date: string;
};

type News = Array<NewsType>;

export default function FavoriteNews() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [news, setNews] = useState<News>([]);
  const userCity = useAppSelector((store) => store.userSlice.user.city);
  // const favoriteMuseums = useAppSelector(
  //   (store) => store.favoritesSlice.favorites,
  // );

  useEffect(() => {
    const getAllNews = async () => {
      // Получение всех новостей
      const response = await fetch(`http://localhost:3000/api/favnews?lang=${i18n.language}`, {
        credentials: 'include',
      });
      const data = await response.json();

      // Сортировка по дате
      const sortedByTimeNews = data.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      setNews(sortedByTimeNews);
    };
    getAllNews();
  }, [userCity, i18n.language]);

  return (
    <div>
      {/* {favoriteMuseums.length === 0 && 'Ваш список любимых музеев пуст!'} */}

      {news.length === 0 ? (
        <h2>
          {t('headerEventsFav')}
        </h2>
      ) : (
        <>
          <h2>{t('eventsFav')}</h2>
          {news.map((el) => {
            const eventDate = new Date(el.date);
            const formattedDate = eventDate.toLocaleString(i18n.language, {
              timeZone: 'Europe/Moscow',
            });

            return (
              <div key={el.id}>
                <h4>{el.title}</h4>
                <img src={el.photo} alt={el.museumName} />
                <p>{el.text}</p>
                <p>{t('eventPlace')} {el.museumName}.</p>
                <p>{t('eventDate')} {formattedDate}.</p>
                <p>{t('address')} {el.museumLocation}.</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
