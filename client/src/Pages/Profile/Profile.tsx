import FavoriteNews from '../../components/FavoriteNews/FavoriteNews';
import FavoritesMuseums from '../../components/FavoritesMuseums/FavoritesMuseums';
import Visit from '../../components/VisitedMuseums/Visit';

export default function Profile() {
  return (
    <div>
      <Visit/>
      <FavoriteNews />
      <FavoritesMuseums />
    </div>
  );
}
