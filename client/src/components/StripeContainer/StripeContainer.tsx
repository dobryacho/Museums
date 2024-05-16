import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PH0yPCcBJqtuA1zCfYCqS2xbkq4EP64ZugLmCqO8s073S7nXpEyjElfQ9hMxABYJg7AswKi7Dz86fsggzx20rBL00c6zrzeJt');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [cardInfo, setCardInfo] = useState(null);

  const user = useAppSelector((store) => store.userSlice.user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Имитация успешной оплаты
    setMessage('Оплата прошла успешно');
    setName('');
    cardElement.clear();

    const validity = new Date();
    validity.setFullYear(validity.getFullYear() + 1);

    try {
      const response = await axios.post('http://localhost:3000/api/cards', {
        userId: user.id,
        validity: validity.toISOString()
      });

      const { id } = response.data;

      setCardInfo({ id, validity: validity.toISOString() });

    } catch (error) {
      console.error('Ошибка при добавлении карты:', error);
    }
  };

  return (
    <div>
      <h2>Оплата</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Данные карты:
          <CardElement options={{hidePostalCode: true}} />
        </label>
        <button type="submit" disabled={!stripe}>
          Оплатить
        </button>
      </form>
      {message && <p>{message}</p>}
      {cardInfo && (
        <div>
          <p>Номер вашей Музейной карты: {cardInfo.id}</p>
          <p>Срок действия: {new Date(cardInfo.validity).toLocaleDateString()}</p>
        </div>
      )}
    </div>
    
  );
};

const StripeContainer = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripeContainer;

