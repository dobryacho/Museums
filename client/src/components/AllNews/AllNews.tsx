import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';

export default function AllNews() {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const userCity = useAppSelector((store) => store.userSlice.user.city);

  useEffect(() => {
    const getAllNews = async () => {
      // Получение всех новостей
      const response = await fetch('http://localhost:3000/api/news');
      const data = await response.json();

      let newsToShow; // Переменная для хранения отфильтрованных музеев

      // Фильтрация новостей по городу
      if (userCity === 'moscow') {
        newsToShow = data.filter((el) => el.Museum.city === 'Москва');
      } else {
        newsToShow = data.filter((el) => el.Museum.city === 'Санкт-Петербург');
      }

      // Сортировка по дате
      const sortedByTimeNews = newsToShow.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      setNews(sortedByTimeNews);
    };

    getAllNews();
  }, [userCity]);

  return (
    <div>
      <h2>{t('events')}</h2>
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
    </div>
  );
}
