import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function Navbar() {
  type Museum = {
    name: string;
    description: string;
    location: string;
    city: string;
    photo: string;
    workedTime: string;
    holidays: string;
    theme: string;
  };
  const [museums, setMuseums] = useState([]);

  const userCity = useAppSelector((store) => store.userSlice.user.city);

  useEffect(() => {
    // Получение всех музеев
    const getAllMuseums = async () => {
      const response = await fetch('http://localhost:3000/api/museums');
      const data = await response.json();

      let museumsToShow; // Переменная для хранения отфильтрованных музеев

      // Фильтрация музеев по городу
      if (userCity === 'moscow') {
        museumsToShow = data.filter(
          (museum: Museum) => museum.city === 'Москва',
        );
      } else {
        museumsToShow = data.filter(
          (museum: Museum) => museum.city === 'Санкт-Петербург',
        );
      }

      // Получение четырех рандомных музеев
      function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const recommendedMuseums: Museum[] = [];

      while (recommendedMuseums.length < 4) {
        const randomIndex = getRandomInt(0, museumsToShow.length - 1);
        if (!recommendedMuseums.includes(museumsToShow[randomIndex])) {
          recommendedMuseums.push(museumsToShow[randomIndex]);
        }
      }

      setMuseums(recommendedMuseums);
    };

    getAllMuseums();
  }, [userCity]);

  return (
    <div>
      <h2>Рекомендованные музеи:</h2>
      {museums.map((museum) => (
        <div key={museum.id}>
          <img src={museum.photo} alt="Тут должно быть фото музея" />
          <h4>{museum.name}</h4>
          <p>{museum.city}</p>
        </div>
      ))}
    </div>
  );
}
