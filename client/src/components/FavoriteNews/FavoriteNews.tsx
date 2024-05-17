import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function FavoriteNews() {
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
          В ваших любимых музеях на данный момент мероприятий не планируются
        </h2>
      ) : (
        <>
          <h2>Ближайшие мероприятия в ваших любимых музеях</h2>
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
                <p>Место проведения: {el.Museum.name}.</p>
                <p>Дата проведения: {formattedDate}.</p>
                <p>Адрес: {el.Museum.location}.</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
