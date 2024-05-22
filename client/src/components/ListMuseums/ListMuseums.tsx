import react, { useEffect, useState } from "react";
import Minimuseum from "../../components/Minimuseum/Minimuseum";
import { Select, Button, FormControl, Input } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMuseums } from "../../redux/thunkActionsAllMuseums";
import { updateMuseums, filterMuseumsByCity, filterMuseumsByDirection, selectCity, selectDirection, filterByInput, searchByContent } from '../../redux/allMuseumsSlice';


export type MuseumType = {
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

export type Museums = Array<MuseumType>;

export default function ListMuseums() {
  
  const dispatch = useAppDispatch();
  const {allMuseums, museums, selectedCity, selectedDirection, input } = useAppSelector((store) => store.allMuseumsSlice);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    void dispatch(fetchMuseums());
  }, []);

  const handleSelectCityChange = (e: { target: { value: react.SetStateAction<string>; }; }) => {
    dispatch(selectCity(e.target.value));
  };
    
  const handleSelectDirectionChange  = (e: { target: { value: react.SetStateAction<string>; }; }) => {
    dispatch(selectDirection(e.target.value));
  };

  const handleInputChange =  (e: { target: { value: react.SetStateAction<string>; }; }) => {
    dispatch(searchByContent(e.target.value));
  };

  const handleSubmit =  () => {
    dispatch(updateMuseums(allMuseums));
      if(selectedCity) {
        dispatch(filterMuseumsByCity(selectedCity));
        }
      if(selectedDirection) {
        dispatch(filterMuseumsByDirection(selectedDirection));
      }
      if(input) {
        dispatch(filterByInput(input))
      }
  };

    return (
        <>

        <h1 id="top"></h1>
        <FormControl>
          <Select placeholder="Все города" onChange={handleSelectCityChange}>
            <option value='Москва'>Москва</option>
            <option value='Санкт-Петербург'>Санкт-Петербург</option>
          </Select>
          <Select placeholder="Все направления" onChange={handleSelectDirectionChange}>
            <option value='Искусство'>Искусство</option>
            <option value='Наука и техника'>Наука и техника</option>
            <option value='Этнография'>Этнография</option>
            <option value='Природа и животные'>Природа и животные</option>
            <option value='Архитектура'>Архитектура</option>
            <option value='История'>История</option>
          </Select>
          <Input placeholder="Поиск по ключевому слову" onChange={handleInputChange}/>
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