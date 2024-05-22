import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { fetchFavorites, fetchVisited } from '../../redux/thunkActionsCurrentMuseum';
import FavIcon from '../../components/FavIcon/FavIcon';
import Checkbox from '../../components/Checkbox/Checkbox';

import type { RecallType, RouteParams, MuseumType } from './currMusTypes';
import { Button, ButtonGroup, Input, Stack, Textarea } from '@chakra-ui/react';
import DelBtn from './DelBtn/DelBtn';
import { updateMuseums } from '../../redux/allMuseumsSlice';

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

const initialState = {name: '', city: '', description: '', location: '', workedTime: '', holidays: ''}

export default function CurrentMuseum(): JSX.Element {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const allMuseums = useAppSelector((store)=> store.allMuseumsSlice.museums)

  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const [museum, setMuseum] = useState<MuseumsType>([]);
  const [editMuseum, setEditMuseum] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const [updateRecalls, setUpdateRecalls] = useState<boolean>(true);
  const navigate = useNavigate();

  const user = useAppSelector((store) => store.userSlice.user);

    useEffect(() => {
      axios.get<MuseumsType>(`http://localhost:3000/api/museums/${id}?lang=${i18n.language}`).then((res) => {
       setMuseum(res.data);
      });
     }, [id, i18n.language, updateRecalls]);

     useEffect(() => {
      if (user.id) {
        dispatch(fetchFavorites(user.id));
        dispatch(fetchVisited(user.id));
      }
    }, [dispatch, user.id]);

const handelEdit = () => {
  setEditMuseum((pre)=>!pre)
  if (!editMuseum) {
    setInputs({
      name: museum.name, 
      city: museum.city, 
      description: museum.description, 
      location: museum.location, 
      workedTime: museum.workedTime, 
      holidays: museum.holidays});
  } else {
    setInputs(initialState)
  }
}

const handleConfirmEdit = () => {
  axios.patch(`http://localhost:3000/api/museums/${id}`, inputs)
  .then((res)=> {res.status < 300 && setMuseum((pre)=>({...pre,
    name: inputs.name, 
    city: inputs.city, 
    description: inputs.description, 
    location: inputs.location, 
    workedTime: inputs.workedTime, 
    holidays: inputs.holidays}));
    setEditMuseum((pre)=>!pre);
  })
}

const changeInputs = (
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
) => {
  setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
};

const handlerConfirm = () => {
  axios.delete(`http://localhost:3000/api/museums/${museum.id}`).then(()=>{dispatch(updateMuseums(allMuseums.filter((mus)=> mus.id !== museum.id)));navigate("/allmuseums/list");})
  
}

  return (
    <>
      {museum?.photo && <img src={museum.photo} alt={museum.name} />}
      {user.email === "admin_museums@mail.ru" && (
        <ButtonGroup spacing="3" m={2}>
          <DelBtn handle={handlerConfirm} btnText='Удалить музей'/>
          <Button onClick={handelEdit}>Редактировать</Button>
        </ButtonGroup>
      )} {editMuseum ? (
        <>
        <Stack spacing={3}>
        <Input name='name' type='text' placeholder='Название музея' value={inputs.name} onChange={changeInputs}></Input>
        <Input name='city' type='text' placeholder='Город' value={inputs.city} onChange={changeInputs}></Input>
        <Textarea name='description' placeholder='Описание музея' value={inputs.description} onChange={changeInputs}></Textarea>
        <Input name='location' type='text' placeholder='Адрес' value={inputs.location} onChange={changeInputs}></Input>
        <Input name='workedTime' type='text' placeholder='Время работы' value={inputs.workedTime} onChange={changeInputs}></Input>
        <Input name='holidays' type='text' placeholder='Выходные дни' value={inputs.holidays} onChange={changeInputs}></Input>
        </Stack>
        <ButtonGroup spacing="3" m={2}>
        <Button onClick={handleConfirmEdit}>Подтвердить</Button>
        <Button onClick={handelEdit}>Отмена</Button>
        </ButtonGroup>
        </>
      ) : (
        <>
      <h2>{museum.name}</h2>
      <p>{museum.description}</p>
      <p>
        {t('address')} {museum.city}, {museum.location}
      </p>
      <p>{t('workingHours')} {museum.workedTime}</p>
      <p>{t('dayOff')} {museum.holidays}</p>
      </>
      )}

      {(user.email && user.email !== "admin_museums@mail.ru") && (
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
              {user.email === "admin_museums@mail.ru" && (<DelBtn trigger={setUpdateRecalls} id={recall} btnText='Удалить отзыв'/>)}
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