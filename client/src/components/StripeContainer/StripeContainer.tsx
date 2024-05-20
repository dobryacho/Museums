import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import axios from 'axios';
import { useAppSelector } from '../../redux/hooks';
import './stripeContainer.style.css';

const stripePromise = loadStripe('pk_test_51PH0yPCcBJqtuA1zCfYCqS2xbkq4EP64ZugLmCqO8s073S7nXpEyjElfQ9hMxABYJg7AswKi7Dz86fsggzx20rBL00c6zrzeJt');

const appearance = {
  theme: 'flat'
};

const elementsOptions = {
  appearance,
};

interface CardInfoType {
  id: number;
  validity: string;
}

const PaymentForm = () => {
  const { t } = useTranslation();
  
  const stripe = useStripe();
  const elements = useElements();
  const { handleSubmit, setValue } = useForm();
  const [message, setMessage] = useState<string>('');
  const [cardInfo, setCardInfo] = useState<CardInfoType | null>(null);
  const user = useAppSelector((store) => store.userSlice.user);

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

  const onSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    let validity = new Date();

    try {
      let response;
      if (cardInfo) {
        validity = new Date(cardInfo.validity);
        validity.setFullYear(validity.getFullYear() + 1);

        response = await axios.put(`http://localhost:3000/api/cards/${cardInfo.id}`, {
          userId: user.id,
          validity: validity.toISOString(),
        });

        setCardInfo({ ...cardInfo, validity: validity.toISOString() });
      } else {
        validity.setFullYear(validity.getFullYear() + 1);
        const response = await axios.post('http://localhost:3000/api/cards', {
        userId: user.id,
        validity: validity.toISOString(),
      });

      const { id } = response.data;

      setCardInfo({ id, validity: validity.toISOString() });
    }

      setMessage('Оплата прошла успешно');
      elements.getElement(CardElement)?.clear();

    } catch (error) {
      console.error('Ошибка при добавлении карты:', error);
    }
  };

  return (
    <div>
      {cardInfo ? (
        <>
          <p>{t('cardNumber')} {cardInfo.id}</p>
          <p>{t('validity')} {new Date(cardInfo.validity).toLocaleDateString()}</p>
          <h2>{t('renewCard')}</h2>
        </>
      ) : (
        <h2>Купить музейную карту</h2>
      )}
      <div className="card-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>{t('oneYearCard')}<br />{t('totalSum')}</p>
          </label>
          <label>
            <CardElement className="card-element" options={{ hidePostalCode: true }} />
          </label>
          <button type="submit" disabled={!stripe}>
          {t('buy')}
          </button>
        </form>
      </div>
      <div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

const StripeContainer = () => (
  <Elements stripe={stripePromise} options={elementsOptions}>
    <PaymentForm />
  </Elements>
);

export default StripeContainer;
