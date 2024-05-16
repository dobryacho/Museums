import { useEffect } from 'react';
import './App.css';
import AllMuseums from './Pages/AllMuseums/AllMuseums';
import { fetchAuth } from './redux/thunkActions';
import { useAppDispatch } from './redux/hooks';
import CurrentMuseum from './Pages/CurrentMuseum/CurrentMuseum';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ListMuseums from './components/ListMuseums/ListMuseums';
import FavoritesMuseums from './components/FavoritesMuseums/FavoritesMuseums';

function App(): JSX.Element {
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmuseums" element={<AllMuseums />}>
          <Route path='list' element={<ListMuseums />} />
          <Route path='map' element={<p>Компонент с картой</p>} />
        </Route>
        <Route path="/allmuseums/:id" element={<CurrentMuseum />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritesMuseums" element={<FavoritesMuseums />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
