import React, { useState, useEffect } from 'react';
import AddMuseum from '../../components/AddMuseum/AddMuseum';
import AddNews from '../../components/AddNews/AddNews';
import FavoriteNews from '../../components/FavoriteNews/FavoriteNews';
import FavoritesMuseums from '../../components/FavoritesMuseums/FavoritesMuseums';
import Visit from '../../components/VisitedMuseums/Visit';
import Stat from '../../components/Stat/Stat';
import { useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import styles from './Profile.module.css';
import { useTranslation } from 'react-i18next';
import QrCodeGenerator from '../../components/QRScanner/QRCode/QRCode'
import { Navigate } from 'react-router-dom';

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
        const response = await axios.get(
          `http://localhost:3000/api/cards/?userId=${user.id}`,
        );
        if (response.data.length > 0) {
          setCardInfo(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (user.email) {
      fetchCardInfo();
    };
  }, [user.id]);

  if (!user.email) {
    return (<div>Загрузка...{user?.anon && (<Navigate to="/" />)}</div>)
  }

  return (
    <div>
      {user.email === 'admin_museums@mail.ru' ? (
        <>
          <AddMuseum />
          <QrCodeGenerator />
          <AddNews />
          <Stat />
        </>
      ) : (
        <>
          <FavoriteNews cardInfo={cardInfo} />
          <FavoritesMuseums />
          <Visit />
        </>
      )}
    </div>
  );
}
