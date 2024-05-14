import { useState, useEffect } from 'react';

export default function Navbar() {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    const getAllMuseums = async () => {
      const response = await fetch('http://localhost:3000/api/museums');
      const data = await response.json();

      // Функция для генерации случайного числа в заданном диапазоне
      function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // Новый массив, куда будут добавлены случайные элементы
      const recommendedMuseums = [];

      // Цикл для выбора и добавления 4 случайных элементов в новый массив
      while (recommendedMuseums.length < 4) {
        const randomIndex = getRandomInt(0, data.length - 1);
        if (!recommendedMuseums.includes(data[randomIndex])) {
          recommendedMuseums.push(data[randomIndex]);
        }
      }

      setMuseums(recommendedMuseums);
    };

    getAllMuseums();
  }, []);

  return (
    <div>
      {museums.map((museum) => (
        <div key={museum.id}>
          <img src={museum.photo} alt="Тут должно быть фото музея" />
          <h4>{museum.name}</h4>
          <p>{museum.location}</p>
        </div>
      ))}
    </div>
  );
}
