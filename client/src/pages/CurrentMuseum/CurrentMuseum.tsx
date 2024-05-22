import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { fetchFavorites, fetchVisited } from '../../redux/thunkActionsCurrentMuseum';
import FavIcon from '../../components/FavIcon/FavIcon';
import Checkbox from '../../components/Checkbox/Checkbox';

import type { RecallType, RouteParams, MuseumType } from './currMusTypes';
import { Button } from '@chakra-ui/react';

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
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const [museum, setMuseum] = useState<MuseumsType>([]);

  const user = useAppSelector((store) => store.userSlice.user);
  
    useEffect(() => {
      axios.get<MuseumsType>(`http://localhost:3000/api/museums/${id}?lang=${i18n.language}`).then((res) => {
       setMuseum(res.data);
      });
     }, [id, i18n.language]);

     useEffect(() => {
      if (user.id) {
        dispatch(fetchFavorites(user.id));
        dispatch(fetchVisited(user.id));
      }
    }, [dispatch, user.id]);


  return (
    <>
      {museum?.photo && <img src={museum.photo} alt={museum.name} />}
      <h2>{museum.name}</h2>
      <p>{museum.description}</p>
      <p>
        {t('address')} {museum.city}, {museum.location}
      </p>
      <p>{t('workingHours')} {museum.workedTime}</p>
      <p>{t('dayOff')} {museum.holidays}</p>

      {user.email && (
        <>
          <FavIcon />
          <Checkbox />
        </>
      )}

      <div>
        <h3>{t('reviews')}</h3>
        {museum?.recalledByUsers?.length > 0 ? (
          museum?.recalledByUsers.map((recall) => (
            <div key={recall.Recall.museumId}>
              <p>{recall.Recall.text}</p>
              <p>{t('author')} {recall.firstName} {recall.lastName}</p>
              <p>{t('date')} {new Date(recall.Recall.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>{t('noReviews')}</p>
        )}
      </div>
      <Button as={Link} to="/allmuseums/list#top" colorScheme="purple">Вернуться к списку музеев</Button>
    </>
  );
}