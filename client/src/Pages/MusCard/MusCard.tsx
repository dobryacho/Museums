import React from 'react';
import StripeContainer from '../../components/StripeContainer/StripeContainer';
import { useAppSelector } from '../../redux/hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MusCard() {
  const { t } = useTranslation();


  const user = useAppSelector((store) => store.userSlice.user);
  const cardInfo = useAppSelector((store) => store.cardSlice.cardInfo);
  const navigate = useNavigate();

  const handleScanClick = () => {
    navigate('/scan');
  };

  const isCardValid = cardInfo && new Date(cardInfo.validity) > new Date();

  if (!user.email) {
    return <div>Загрузка...</div>
  }
  
  return (
    <>
      <StripeContainer />
      {isCardValid && (
        <button onClick={handleScanClick}>
          {t('scanQR')}
        </button>
      )}
    </>
  );
}

