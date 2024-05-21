import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import styles from './AllNews.module.css';

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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('events')}</h2>
      <div className={styles['carousel-container']}>
        <Carousel>
          {news.map((el) => (
            <Carousel.Item key={el.id}>
              <div className={styles['image-container']}>
                <img
                  className={styles.photo}
                  src={el.photo}
                  alt="Тут должно быть фото музея"
                />
                <div className={styles['image-overlay']}></div>
              </div>
              <Carousel.Caption>
                <h3 className={styles.cardTitle}>{el.title}</h3>
                <p>{el.text}</p>
                <p>
                  {t('eventPlace')} {el.Museum.name}.
                </p>
                <p>
                  {t('eventDate')}{' '}
                  {new Date(el.date).toLocaleString('ru-RU', {
                    timeZone: 'Europe/Moscow',
                  })}
                  .
                </p>
                <p>
                  {t('address')} {el.Museum.location}.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
