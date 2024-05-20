import react, { useEffect, useState } from "react";
import Minimuseum from "../Minimuseum/Minimuseum";
import { Select, Button, FormControl } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons';
import axios from "axios";
import { useTranslation } from 'react-i18next';


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
  const { t, i18n } = useTranslation();
    
  const [selectedCity, setSelectedCity] = useState('');
  
  const [selectedDirection, setSelectedDirection] = useState('');
  
  const [allMuseums, setAllMuseums] = useState<Museums>([]);

  const [museums, setMuseums] = useState<Museums>([]);


  useEffect(() => {
    axios.get<Museums>(`http://localhost:3000/api/museums?lang=${i18n.language}`).then((res) => {
      setAllMuseums(res.data);
      setMuseums(res.data);
    })
  }, [i18n.language]);

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

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
    
        <FormControl>
          <Select placeholder={t('allCities')} value={selectedCity} onChange={handleSelectCityChange}>
            <option value='Москва'>{t('moscow')}</option>
            <option value='Санкт-Петербург'>{t('spb')}</option>
          </Select>
          <Select placeholder={t('allDirections')} value={selectedDirection} onChange={handleSelectDirectionChange}>
            <option value='Искусство'>{t('art')}</option>
            <option value='Наука и техника'>{t('science')}</option>
            <option value='Этнография'>{t('ethnography')}</option>
            <option value='Природа и животные'>{t('nature')}</option>
            <option value='Архитектура'>{t('architecture')}</option>
            <option value='История'>{t('history')}</option>
          </Select>
          <Button onClick={handleSubmit} colorScheme="blue" >{t('select')}</Button>
        </FormControl>
    
        <div>
          {museums.length ? (
            museums.map((museum) => (
              <Minimuseum key={museum.id} museum={museum} />
            ))
          ) : (
            <h3>{t('noMuseums')}</h3>
          )}
        </div>
        <Button
        onClick={scrollToTop}
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="blue"
        size="lg"
        zIndex="1000"
        borderRadius="full"
      >
        <ArrowUpIcon w={6} h={6} />
      </Button>
  </>
  )
}
