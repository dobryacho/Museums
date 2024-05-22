import React, { useEffect } from 'react';
import StripeContainer from '../../components/StripeContainer/StripeContainer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Input } from '@chakra-ui/react';
import { madeChoise, changeAddress, makeOrder } from '../../redux/cardSlice';
import react from 'react';
import { addNewOrder, fetchOrders } from '../../redux/thunkActionsCard';

export default function MusCard() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { cardIsOrdered, inputAddress, orders, choiceIsMade } = useAppSelector((store) => store.cardSlice);

  const user = useAppSelector((store) => store.userSlice.user);
  const cardInfo = useAppSelector((store) => store.cardSlice.cardInfo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOrders());
    console.log(orders);
  }, []);

  useEffect(() => {
    if (user.email) {
      dispatch(makeOrder(orders.some((order) => order.userId === user.id)))
    }
  }, [cardIsOrdered, orders, user.email]);

  const handleScanClick = () => {
    navigate('/scan');
  };

  const isCardValid = cardInfo && new Date(cardInfo.validity) > new Date();

  const checkboxClick = () => {
    dispatch(madeChoise(!choiceIsMade));
    console.log(`${user.firstName} ${user.lastName}`);
  }

  const addressInputChange =  (e: { target: { value: react.SetStateAction<string>; }; }) => {
    dispatch(changeAddress(e.target.value));
  };

  const handleOrderClick = () => {
    const userId = user.id;
    const userName = `${user.firstName} ${user.lastName}`;
    const address = inputAddress;
    dispatch(addNewOrder({userId, userName, address}))
  }

  if (!user.email) {
    return (<div>{t('loading')}{user?.anon && (<Navigate to="/" />)}</div>)
  }
  
  return (
    <>
      <StripeContainer />
      {isCardValid && (
        <button onClick={handleScanClick}>
          {t('scanQR')}
        </button>
      )}
      <br/>
      
        {!isCardValid ? <></> : cardIsOrdered ? 
          <div>{t('getPlasticCard')}</div>
          :
          (<> 
            <Checkbox onChange={checkboxClick} colorScheme="green">{t('orderPlasticCard')}</Checkbox>
            {choiceIsMade &&
              (<>
              <Input placeholder={t('addressPlasticCard')} onChange={addressInputChange}/>
              <Button onClick={handleOrderClick}>{t('send')}</Button>
              </>)
            }
          </>)
        }
    </>
  );
}

