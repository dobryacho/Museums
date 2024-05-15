import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import axios from 'axios';
import { fetchAddFavorite,
  fetchRemoveFavorite,
  fetchAddVisited,
  fetchRemoveVisited,
  fetchRecalls,
} from '../../redux/thunkActionsCurrentMuseum';

import type { RecallType, RouteParams, MuseumType } from './currMusTypes';

export default function CurrentMuseum(): JSX.Element {
  const { id } = useParams<RouteParams>();
  console.log(id);

  // const dispatch = useAppDispatch();

  const [museum, setMuseum] = useState<MuseumType | null>(null);
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [isVisited, setIsVisited] = useState(false);

  // const user = useAppSelector((store) => store.userSlice.user.login);
  // const favorites = useAppSelector((store) => store.favoritesSlice.favorites);
  // const visitedMuseums = useAppSelector((store) => store.visitedSlice.visited);
  // const recalls = useAppSelector((store) => store.recallsSlice.recalls); //fix here!

  useEffect(() => {
    axios.get<MuseumType>(`http://localhost:3000/api/museums/${id}`).then((res) => {
     console.log(res.data);
     setMuseum(res.data);
    });
   }, []);

  // useEffect(() => {
  //   dispatch(fetchRecalls(parseInt(id, 10)));
  // }, [id, dispatch]);

  // useEffect(() => {
  //   setIsFavorite(favorites.some((fav) => fav.museumId === parseInt(id, 10)));
  // }, [favorites, id]);
  
  // useEffect(() => {
  //   setIsVisited(visitedMuseums.some((vis) => vis.museumId === parseInt(id, 10)),
  //   );
  // }, [visitedMuseums, id]);

  // const handleFavoriteClick = async (): Promise<void> => {
  //   try {
  //     if (isFavorite) {
  //       const favorite = favorites.find(
  //         (fav) => fav.museumId === parseInt(id, 10),
  //       );
  //       if (favorite) {
  //         await dispatch(fetchRemoveFavorite(favorite.id));
  //       }
  //     } else {
  //       await dispatch(fetchAddFavorite(parseInt(id, 10)));
  //     }
  //     setIsFavorite((prev) => !prev);
  //   } catch (err) {
  //     console.error('Ошибка при обновлении статуса избранного:', err);
  //   }
  // };

  // const handleVisitedClick = async (): Promise<void> => {
  //   try {
  //     if (isVisited) {
  //       await dispatch(fetchRemoveVisited(parseInt(id, 10)));
  //     } else {
  //       await dispatch(fetchAddVisited(parseInt(id, 10)));
  //     }
  //     setIsVisited((prev) => !prev);
  //   } catch (err) {
  //     console.error('Ошибка при обновлении статуса посещенных музеев:', err);
  //   }
  // };

  if (!museum) {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      {museum.photo && <img src={museum.photo} alt={museum.name} />}
      <h2>{museum.name}</h2>
      <p>{museum.description}</p>
      <p>
        Адрес: {museum.city}, {museum.location}
      </p>
      <p>Время работы: {museum.workedTime}</p>
      <p>Выходной: {museum.holidays}</p>

    </>
  );
}

{/* {user && (
  <>
    <div>
      <span
        onClick={handleFavoriteClick}
        style={{ color: isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
      >
        ♥
      </span>
    </div>
    <div>
      <input
        type="checkbox"
        checked={isVisited}
        onChange={handleVisitedClick}
      />
      <label>Посетил этот музей</label>
    </div>
  </>
)} */}

{/* <div>
  <h3>Отзывы</h3>
  {recalls.length > 0 ? (
    recalls.map((recall: RecallType) => (
      <div key={recall.id}>
        <p>{recall.text}</p>
        <p>Автор: {recall.userId}</p>
        <p>Дата: {new Date(recall.createdAt).toLocaleDateString()}</p>
      </div>
    ))
  ) : (
    <p>Здесь пока нет отзывов</p>
  )}
</div> */}