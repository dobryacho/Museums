import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { fetchFavorites, fetchVisited } from '../../redux/thunkActionsCurrentMuseum';
import FavIcon from '../../components/FavIcon/FavIcon';
import Checkbox from '../../components/Checkbox/Checkbox';

import type { RecallType, RouteParams, MuseumType } from './currMusTypes';

export interface MuseumsType {
  id:              number;
  name:            string;
  description:     string;
  location:        string;
  city:            string;
  photo:           string;
  workedTime:      string;
  holidays:        string;
  theme:           string;
  coordinates:     string;
  createdAt:       Date;
  updatedAt:       Date;
  recalledByUsers: RecalledByUser[];
}

export interface RecalledByUser {
  id:        number;
  email:     string;
  firstName: string;
  lastName:  string;
  password:  string;
  city:      string;
  phone:     string;
  createdAt: Date;
  updatedAt: Date;
  Recall:    Recall;
}

export interface Recall {
  text:      string;
  userId:    number;
  museumId:  number;
  createdAt: Date;
  updatedAt: Date;
}


export default function CurrentMuseum(): JSX.Element {
  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const [museum, setMuseum] = useState<MuseumsType>([]);
console.log(museum);

  const user = useAppSelector((store) => store.userSlice.user);
  
    useEffect(() => {
      axios.get<MuseumsType>(`http://localhost:3000/api/museums/${id}`).then((res) => {
       setMuseum(res.data);
      });
     }, [id]);

     useEffect(() => {
      if (user.id) {
        dispatch(fetchFavorites(user.id));
        dispatch(fetchVisited(user.id));
      }
    }, [dispatch, user.id]);

  return (
    <>
      {museum?.photo && <img src={museum.photo} alt={museum.name} />}
      <h2>{museum?.name}</h2>
      <p>{museum?.description}</p>
      <p>
        Адрес: {museum?.city}, {museum?.location}
      </p>
      <p>Время работы: {museum?.workedTime}</p>
      <p>Выходной: {museum?.holidays}</p>

      {user.email && (
        <>
          <FavIcon />
          <Checkbox />
        </>
      )}

      <div>
        <h3>Отзывы</h3>
        {museum?.recalledByUsers?.length > 0 ? (
          museum?.recalledByUsers.map((recall) => (
            <div key={recall.Recall.museumId}>
              <p>{recall.Recall.text}</p>
              <p>Автор: {recall.firstName} {recall.lastName}</p>
              <p>Дата: {new Date(recall.Recall.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>Здесь пока нет отзывов</p>
        )}
      </div>
    </>
  );
}