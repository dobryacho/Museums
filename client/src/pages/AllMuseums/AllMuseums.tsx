import axios from "axios";
import react, { useEffect, useState } from "react";
import Minimuseum from "../../components/Minimuseum/Minimuseum";

type MuseumType = {
    id: number;
    name: string;
    description: string;
    location: string;
    city: string;
    photo: string;
    workedTime: string;
    holiday: string;
    theme: string;
    createdAt: Date;
    updatedAt: Date;
  };

type Museums = Array<MuseumType>;
  
export default function AllMuseums() {

  const [selectedCity, setSelectedCity] = useState('Потрачено');
  
  const [selectedDirection, setSelectedDirection] = useState('');
  
  const [allMuseums, setAllMuseums] = useState<Museums>([]);

  const [museums, setMuseums] = useState<Museums>([]);

  useEffect(() => {
    axios.get<Museums>('http://localhost:3000/api/museums').then((res) => {
      setAllMuseums(res.data);
      setMuseums(res.data);
      console.log(museums);
    })
  }, []);

  const handleSelectCityChange = (e: { target: { value: react.SetStateAction<string>; }; }) => {
    setSelectedCity(e.target.value);
  };

  const handleSelectDirectionChange  = (e: { target: { value: react.SetStateAction<string>; }; }) => {
    setSelectedDirection(e.target.value);
  };

  const handleFormSubmit =  (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(selectedCity);
    setMuseums(allMuseums);
    // if (selectedCity !== 'Все города' && selectedDirection !== 'Все направления') {
    setMuseums((museums) => museums.filter((museum) => museum.city === selectedCity ));
    // }

  };

  return (
    <>

    <form onSubmit={handleFormSubmit}>
      <select value={selectedCity} onChange={handleSelectCityChange}>
        <option value='Все города'>Все города</option>
        <option value='Москва'>Москва</option>
        <option value='Санкт-Петербург'>Санкт-Петербург</option>
      </select>
      <select value={selectedDirection} onChange={handleSelectDirectionChange}>
        <option value='Все направления'>Все направления</option>
        <option value='Искусство'>Искусство</option>
        <option value='Наука и техника'>Наука и техника</option>
        <option value='Этнография'>Этнография</option>
        <option value='Природа и животные'>Природа и животные</option>
        <option value='Архитектура'>Архитектура</option>
        <option value='История'>История</option>
      </select>
      <button type="submit">Продемонстрировать</button>
    </form>

    <div>
      {museums.length ? (
        museums.map((museum) => (
          <Minimuseum key={museum.id} museum={museum} />
        ))
      ) : (
        <h3>Нет доступных музеев</h3>
      )}
    </div>
    </>
  )
}