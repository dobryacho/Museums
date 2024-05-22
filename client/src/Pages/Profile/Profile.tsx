import AddMuseum from '../../components/AddMuseum/AddMuseum';
import AddNews from '../../components/AddNews/AddNews';
import FavoriteNews from '../../components/FavoriteNews/FavoriteNews';
import FavoritesMuseums from '../../components/FavoritesMuseums/FavoritesMuseums';
import Visit from '../../components/VisitedMuseums/Visit';
import { useAppSelector } from '../../redux/hooks';

export default function Profile() {
  const userEmail = useAppSelector((store) => store.userSlice.user.email);
  return (
    <div>
      {userEmail === 'admin_museums@mail.ru' ? (
        <>
          <AddMuseum />
          <AddNews />
        </>
      ) : (
        <>
          <FavoriteNews />
          <FavoritesMuseums />
          <Visit />
        </>
      )}
    </div>
  );
}
