import { ChangeEvent, useCallback, useState, useEffect } from 'react';

export default function AddNews() {
  // Все состояния
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [inputs, setInputs] = useState({ title: '', text: '', date: '' });
  const [museums, setMuseums] = useState([]);
  const [selectedMuseumId, setSelectedMuseumId] = useState(18);

  // Запрос на сервер для получения всех музеев
  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/museums');
        if (!response.ok) {
          throw new Error('С');
        }
        const data = await response.json();
        setMuseums(data);
      } catch (error) {
        console.error('Ошибка при получении всех музеев:', error);
      }
    };

    fetchMuseums();
  }, []);

  // Ручка изменения инпутов
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Функция отправки фотки на сервер
  const sendFile = useCallback(async () => {
    try {
      const data = new FormData();
      data.append('avatar', img);

      const response = await fetch('http://localhost:3000/api/getnewsphoto', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        const responseData = await response.json();
        setAvatar(responseData.path);
      } else {
        console.log('Ошибка при отправке файла:', response.statusText);
      }
    } catch (error) {
      console.log('Ошибка при отправке файла:', error);
    }
  }, [img]);

  // Отправляем фото на сервер только если фото добавили
  useEffect(() => {
    if (img) {
      sendFile(); // Вызываем функцию sendFile при изменении img
    }
  }, [img, sendFile]);

  // Ручка добавления фотки из инпута
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImg(e.target.files[0]);
  };

  // Ручка отправки данных для создания новой новости
  const submitHandler = async (): Promise<void> => {
    const oneNew = {
      title: inputs.title,
      text: inputs.text,
      museumId: selectedMuseumId,
      photo: `http://localhost:3000/${avatar}`,
      date: inputs.date,
    };
    try {
      const response = await fetch('http://localhost:3000/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oneNew),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log('ОТВЕТ ОТ РУЧКИ СОЗДАНИЯ НОВОСТИ', responseData);
        setInputs({ title: '', text: '', date: '' });
        setAvatar(null);
        setImg(null);
      } else {
        console.error('ОТ РУЧКИ СОЗДАНИЯ НОВОСТИ ПРИШЕЛ ОТКАЗ', error);
      }
    } catch (error) {
      console.error('Ошибка отправки запроса на ручку создания новости!');
    }
  };

  return (
    <div>
      <h2>Добавить новое мероприятие:</h2>
      <input onChange={changeHandler} name="title" value={inputs.title} />
      <input onChange={changeHandler} name="text" value={inputs.text} />
      <input
        onChange={changeHandler}
        type="datetime-local"
        name="date"
        value={inputs.date}
      />
      <label htmlFor="">Место где будет проходить мероприятие:</label>
      <select
        value={selectedMuseumId}
        onChange={(e) => setSelectedMuseumId(parseInt(e.target.value))}
      >
        {museums.map((museum) => (
          <option key={museum.id} value={museum.id}>
            {museum.name}
          </option>
        ))}
      </select>
      <div className="avatar">
        {avatar && <img src={`http://localhost:3000/${avatar}`} alt="" />}
      </div>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={submitHandler}>
        Добавить
      </button>
    </div>
  );
}
