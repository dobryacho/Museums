import react, { useEffect, useState } from "react";
import Minimuseum from "../../components/Minimuseum/Minimuseum";
import { Select, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import axios from "axios";


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
    coordinates: string;
    createdAt: Date;
    updatedAt: Date;
  };

type Museums = Array<MuseumType>;

export default function ListMuseums() {
    
  const [selectedCity, setSelectedCity] = useState('');
  
  const [selectedDirection, setSelectedDirection] = useState('');
  
  const [allMuseums, setAllMuseums] = useState<Museums>([]);

  const [museums, setMuseums] = useState<Museums>([]);


  useEffect(() => {
    axios.get<Museums>('http://localhost:3000/api/museums').then((res) => {
      setAllMuseums(res.data);
      setMuseums(res.data);
    })
  }, []);

  const handleSelectCityChange = (e: { target: { value: react.SetStateAction<string>; }; }) => {
        setSelectedCity(e.target.value);
  };
    
  const handleSelectDirectionChange  = (e: { target: { value: react.SetStateAction<string>; }; }) => {
        setSelectedDirection(e.target.value);
  };

    const handleSubmit =  () => {
      setMuseums(allMuseums);
        if(selectedCity) {
          setMuseums((museums) => museums.filter((museum) => museum.city === selectedCity));
        }
        if(selectedDirection) {
          setMuseums((museums) => museums.filter((museum) => museum.theme === selectedDirection));
        }
    };

    return (
        <>
    
        <FormControl>
          <Select placeholder="Все города" value={selectedCity} onChange={handleSelectCityChange}>
            <option value='Москва'>Москва</option>
            <option value='Санкт-Петербург'>Санкт-Петербург</option>
          </Select>
          <Select placeholder="Все направления" value={selectedDirection} onChange={handleSelectDirectionChange}>
            <option value='Искусство'>Искусство</option>
            <option value='Наука и техника'>Наука и техника</option>
            <option value='Этнография'>Этнография</option>
            <option value='Природа и животные'>Природа и животные</option>
            <option value='Архитектура'>Архитектура</option>
            <option value='История'>История</option>
          </Select>
          <Button onClick={handleSubmit} colorScheme="blue" >Продемонстрировать</Button>
        </FormControl>
    
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
