import FavoriteNews from '../../components/FavoriteNews/FavoriteNews';
import FavoritesMuseums from '../../components/FavoritesMuseums/FavoritesMuseums';
import Visit from '../../components/VisitedMuseums/Visit';
import StripeContainer from '../../components/StripeContainer/StripeContainer';

export default function Profile() {
  return (
    <div>
      <StripeContainer />
      <Visit/>
      <FavoriteNews />
      <FavoritesMuseums />
    </div>
  );
}
