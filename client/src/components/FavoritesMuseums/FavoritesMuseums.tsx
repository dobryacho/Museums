import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import FavoriteMuseum from "../FavoriteMuseum/FavoriteMuseum";

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

type Museums = Array<MuseumType>;

export default function FavoritesMuseums() {
  const user = useAppSelector((store) => store.userSlice.user);

  const [favorites, setFavorites] = useState<Museums>([])

  useEffect(() => {
    if (user.id) {
      axios.get(`http://localhost:3000/api/user/favorites/${user.id}`).then((res) => {
        const [userData] = res.data
        setFavorites(userData?.favoriteMuseums);
        console.log(userData?.favoriteMuseums);
      })
    }
  }, [user.id]);
  

  return (
    <div>
    {favorites.length ? (
      favorites.map((museum) => (
        <FavoriteMuseum key={museum.id} museum={museum} />
      ))
    ) : (
      <h3>Нет избранных музеев</h3>
    )}
  </div>
  )
}
