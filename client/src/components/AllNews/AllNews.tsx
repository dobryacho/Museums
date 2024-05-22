import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';
import { Button, useToast } from '@chakra-ui/react';
import axios from 'axios';

export default function AllNews() {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const user = useAppSelector((store) => store.userSlice.user);
  const toast = useToast()

  useEffect(() => {
    const getAllNews = async () => {
      // Получение всех новостей
      const response = await fetch('http://localhost:3000/api/news');
      const data = await response.json();

      let newsToShow; // Переменная для хранения отфильтрованных музеев

      // Фильтрация новостей по городу
      if (user === 'moscow') {
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
  }, [user]);

  const handleDelete = (e: any) => {
      axios.delete(`http://localhost:3000/api/news/${e.target.parentNode.id}`).then(()=>{
        setNews((data)=> ([...data.filter((el)=> el.id !== Number(e.target.parentNode.id))]))
        toast({
          title: `новость удалена`,
          status: 'success',
          isClosable: true,
          duration: 1000,
          position: 'bottom-right',
        })        
      })
  }

  return (
    <div>
      <h2>{t('events')}</h2>
      {news.map((el) => {
        const eventDate = new Date(el.date);
        const formattedDate = eventDate.toLocaleString('ru-RU', {
          timeZone: 'Europe/Moscow',
        });

        return (
          <div key={el.id} id={`${el.id}`}>
            <h4>{el.title}</h4>
            <img src={el.photo} alt="Тут должно быть фото музея" />
            {user.email === "admin_museums@mail.ru" && (
                  <Button onClick={handleDelete} id='delete'  m={2}>Удалить новость</Button>
              )}
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
