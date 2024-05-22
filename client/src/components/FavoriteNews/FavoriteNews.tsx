import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import styles from './FavoriteNews.module.css';

export default function FavoriteNews() {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const userCity = useAppSelector((store) => store.userSlice.user.city);

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
    <div className={styles.wrapper}>
      <div className="container">
        {news.length === 0 ? (
          <h2 className={styles.noNewsTitle}>{t('headerEventsFav')}</h2>
        ) : (
          <>
            <div className={styles.secondWrapper}>
              <h2 className={styles.title}>{t('eventsFav')}</h2>
              <div className={styles['carousel-container']}>
                <Carousel interval={2000} fade>
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
          </>
        )}
      </div>
    </div>
  );
}
