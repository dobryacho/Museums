import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAddFavorite, fetchFavorites, fetchRemoveFavorite } from "../../redux/thunkActionsCurrentMuseum";
import { useEffect } from "react";

type MuseumType = {
    id: number;
    name: string;
    description: string;
    location: string;
    city: string;
    photo: string;
    workedTime: string;
    holiday: string;
    theme: string;
    coordinates: string;
    createdAt: Date;
    updatedAt: Date;
  };


type MuseumProps = {
    museum: MuseumType;
  };

export default function FavoriteMuseum({ museum }: MuseumProps): JSX.Element  {
    
    const dispatch = useAppDispatch();

    const user = useAppSelector((store) => store.userSlice.user);
    const favorites = useAppSelector((store) => store.favoritesSlice.favorites);
  
    const isFavorite = favorites.some((fav) => fav.museumId === museum.id && fav.userId === user.id);

    useEffect(() => {
        if (user.id) {
          dispatch(fetchFavorites(user.id));
        }
      }, [dispatch, user.id]);

    const handleFavoriteClick = () => {
        if (museum.id) {
          const favoriteMuseum = favorites.find(
            (fav) => fav.museumId === museum.id && fav.userId === user.id
          );
      
          if (favoriteMuseum) {
            dispatch(fetchRemoveFavorite(favoriteMuseum.id));
          } else {
            dispatch(fetchAddFavorite({ userId: user.id, museumId: museum.id }));
          }
        }
      };
   
  return (
    <div>
      <Link to={`/allmuseums/${museum.id}`}>
        <h3>{museum.name}</h3>
      </Link>
      <img src={museum.photo} alt={museum.name} />
      <span
        onClick={handleFavoriteClick}
        style={{ color: isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
      >
        ♥
      </span>
    </div>
  )
}