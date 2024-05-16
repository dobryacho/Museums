import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchAddFavorite, fetchRemoveFavorite
} from '../../redux/thunkActionsCurrentMuseum';

import type { RouteParams } from '../../Pages/CurrentMuseum/currMusTypes';

export default function FavIcon() {
  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const user = useAppSelector((store) => store.userSlice.user);
  const favorites = useAppSelector((store) => store.favoritesSlice.favorites);

  const isFavorite = favorites.some((fav) => fav.museumId === parseInt(id, 10) && fav.userId === user.id);
  
  const handleFavoriteClick = () => {
    if (id) {
      const favoriteMuseum = favorites.find(
        (fav) => fav.museumId === parseInt(id, 10) && fav.userId === user.id
      );
  
      if (favoriteMuseum) {
        dispatch(fetchRemoveFavorite(favoriteMuseum.id));
      } else {
        dispatch(fetchAddFavorite({ userId: user.id, museumId: parseInt(id, 10) }));
      }
    }
  };

  return (
    <div>
      <span
        onClick={handleFavoriteClick}
        style={{ color: isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
      >
        ♥
      </span>
    </div>
  )
}
