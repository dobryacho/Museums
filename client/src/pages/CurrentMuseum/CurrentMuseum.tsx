import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { fetchFavorites, fetchVisited } from '../../redux/thunkActionsCurrentMuseum';
import FavIcon from '../../components/FavIcon/FavIcon';
import Checkbox from '../../components/Checkbox/Checkbox';

import type { RecallType, RouteParams, MuseumType } from './currMusTypes';

export default function CurrentMuseum(): JSX.Element {
  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const [museum, setMuseum] = useState<MuseumType | null>(null);

  const user = useAppSelector((store) => store.userSlice.user);
  
    useEffect(() => {
      axios.get<MuseumType>(`http://localhost:3000/api/museums/${id}`).then((res) => {
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
        {museum?.recalls?.length > 0 ? (
          museum?.recalls.map((recall: RecallType) => (
            <div key={recall.id}>
              <p>{recall.text}</p>
              <p>Автор: {recall.userId}</p>
              <p>Дата: {new Date(recall.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>Здесь пока нет отзывов</p>
        )}
      </div>
    </>
  );
}