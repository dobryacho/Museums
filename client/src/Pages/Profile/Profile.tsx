import React, { useState, useEffect } from 'react';
import AddMuseum from '../../components/AddMuseum/AddMuseum';
import AddNews from '../../components/AddNews/AddNews';
import FavoriteNews from '../../components/FavoriteNews/FavoriteNews';
import FavoritesMuseums from '../../components/FavoritesMuseums/FavoritesMuseums';
import Visit from '../../components/VisitedMuseums/Visit';
import Stat from '../../components/Stat/Stat';
import { useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface CardInfoType {
  id: number;
  validity: string;
}

export default function Profile() {
  const { t } = useTranslation();

  const user = useAppSelector((store) => store.userSlice.user);

  const [cardInfo, setCardInfo] = useState<CardInfoType | null>(null);

  useEffect(() => {
    const fetchCardInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/?userId=${user.id}`);
        if (response.data.length > 0) {
          setCardInfo(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCardInfo();
  }, [user.id]);

  if (!user.email) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      {user.email === 'admin_museums@mail.ru' ? (
        <>
          <AddMuseum />
          <AddNews />
          <Stat />
        </>
      ) : (
        <>
          {cardInfo ? (
            <>
              <p>{t('cardNumber')} {cardInfo.id}</p>
              <p>{t('validity')} {new Date(cardInfo.validity).toLocaleDateString()}</p>
            </>
          ) : (
            <h2>{t('noCard')}</h2>
          )}
          <Visit />
          <FavoriteNews />
          <FavoritesMuseums />
        </>
      )}
    </div>
  );
}
