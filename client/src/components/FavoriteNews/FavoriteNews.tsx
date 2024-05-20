import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

import { useTranslation } from 'react-i18next';

export default function FavoriteNews() {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const userCity = useAppSelector((store) => store.userSlice.user.city);
  // const favoriteMuseums = useAppSelector(
  //   (store) => store.favoritesSlice.favorites,
  // );

  useEffect(() => {
    const getAllNews = async () => {
      // Получение всех новостей
      const response = await fetch('http://localhost:3000/api/favnews', {
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
  }, [userCity]);

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
            const formattedDate = eventDate.toLocaleString('ru-RU', {
              timeZone: 'Europe/Moscow',
            });

            return (
              <div key={el.id}>
                <h4>{el.title}</h4>
                <img src={el.photo} alt="Тут должно быть фото музея" />
                <p>{el.text}</p>
                <p>{t('eventPlace')} {el.Museum.name}.</p>
                <p>{t('eventDate')} {formattedDate}.</p>
                <p>{t('address')} {el.Museum.location}.</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
