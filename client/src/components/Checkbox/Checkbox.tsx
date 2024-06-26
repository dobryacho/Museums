import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchVisited, fetchAddVisited,fetchRemoveVisited,
} from '../../redux/thunkActionsCurrentMuseum';

import type { RouteParams } from '../../Pages/CurrentMuseum/currMusTypes';

export default function Checkbox() {
  const { id } = useParams<RouteParams>();

  const dispatch = useAppDispatch();

  const user = useAppSelector((store) => store.userSlice.user);
  const visitedMuseums = useAppSelector((store) => store.visitedSlice.visited);
  const isVisited = visitedMuseums.some((vis) => vis.museumId === parseInt(id, 10) && vis.userId === user.id);

  const handleVisitedClick = () => {
    if (id) {
      const visitedMuseum = visitedMuseums.find(
        (vis) => vis.museumId === parseInt(id, 10) && vis.userId === user.id
      );
  
      if (visitedMuseum) {
        dispatch(fetchRemoveVisited(visitedMuseum.id));
      } else {
        dispatch(fetchAddVisited({ userId: user.id, museumId: parseInt(id, 10) }));
      }
    }
  };

  return (
    <div>
            <input
              type="checkbox"
              checked={isVisited}
              onChange={handleVisitedClick}
            />
            <label>Посетил этот музей</label>
          </div>
  )
}
