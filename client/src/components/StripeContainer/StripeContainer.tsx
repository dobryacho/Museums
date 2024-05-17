import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAppSelector } from '../../redux/hooks';
import './stripeContainer.style.css';

const stripePromise = loadStripe('pk_test_51PH0yPCcBJqtuA1zCfYCqS2xbkq4EP64ZugLmCqO8s073S7nXpEyjElfQ9hMxABYJg7AswKi7Dz86fsggzx20rBL00c6zrzeJt');

const appearance = {
  theme: 'flat',
};

const elementsOptions = {
  appearance,
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { handleSubmit, reset } = useForm();
  const [message, setMessage] = useState('');
  const [cardInfo, setCardInfo] = useState(null);
  const user = useAppSelector((store) => store.userSlice.user);

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    const validity = new Date();
    validity.setFullYear(validity.getFullYear() + 1);

    try {
      const response = await axios.post('http://localhost:3000/api/cards', {
        userId: user.id,
        validity: validity.toISOString(),
        name: data.name,
      });

      const { id } = response.data;

      setCardInfo({ id, validity: validity.toISOString() });

      setMessage('Оплата прошла успешно');
      reset();

    } catch (error) {
      console.error('Ошибка при добавлении карты:', error);
    }
  };

  return (
    <div>
      <div className="card-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              type="text"
              placeholder="Card Holder's Name"
            />
          </label>
          <label>
            <CardElement className="card-element" options={{ hidePostalCode: true }} />
          </label>
          <button type="submit" disabled={!stripe}>
            Оплатить
          </button>
        </form>
      </div>
      <div>
        {message && <p>{message}</p>}
        {cardInfo && (
          <div>
            <p>Номер вашей Музейной карты: {cardInfo.id}</p>
            <p>Срок действия: {new Date(cardInfo.validity).toLocaleDateString()}</p>
          </div>
        )}
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
