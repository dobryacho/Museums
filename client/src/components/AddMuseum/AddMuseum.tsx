import { ChangeEvent, useCallback, useState, useEffect } from 'react';

export default function AddMuseum() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    location: '',
    city: '',
    workedTime: '',
    holidays: '',
    theme: '',
    coordinates: '',
  });

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

  // Ручка отправки данных для добавления нового музея
  const submitHandler = async (): Promise<void> => {
    const museum = {
      name: inputs.name,
      description: inputs.description,
      location: inputs.location,
      city: inputs.city,
      photo: `http://localhost:3000/${avatar}`,
      workedTime: inputs.workedTime,
      holidays: inputs.holidays,
      theme: inputs.theme,
      coordinates: inputs.coordinates,
    };
    try {
      const response = await fetch('http://localhost:3000/api/museums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(museum),
      });
      if (response.ok) {
        setInputs({
          name: '',
          description: '',
          location: '',
          city: '',
          workedTime: '',
          holidays: '',
          theme: '',
          coordinates: '',
        });
        setAvatar(null);
        setImg(null);
      } else {
        console.error('ОТ РУЧКИ ДОБАВЛЕНИЯ МУЗЕЯ ПРИШЕЛ ОТКАЗ', error);
      }
    } catch (error) {
      console.error('Ошибка отправки запроса на ручку добавления музея', error);
    }
  };

  return (
    <div>
      <h2>Добавить новый музей:</h2>
      <input onChange={changeHandler} name="name" value={inputs.name} />
      <input
        onChange={changeHandler}
        name="description"
        value={inputs.description}
      />
      <input onChange={changeHandler} name="location" value={inputs.location} />
      <input onChange={changeHandler} name="city" value={inputs.city} />
      <input
        onChange={changeHandler}
        name="workedTime"
        value={inputs.workedTime}
      />
      <input onChange={changeHandler} name="holidays" value={inputs.holidays} />
      <input onChange={changeHandler} name="theme" value={inputs.theme} />
      <input
        onChange={changeHandler}
        name="coordinates"
        value={inputs.coordinates}
      />

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
