import { useEffect } from 'react';
import './App.css';
import AllMuseums from './Pages/AllMuseums/AllMuseums';
import { fetchAuth } from './redux/thunkActions';
import { useAppDispatch } from './redux/hooks';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CurrentMuseum from './Pages/CurrentMuseum/CurrentMuseum';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ListMuseums from './components/ListMuseums/ListMuseums_transl';
import FavoritesMuseums from './components/FavoritesMuseums/FavoritesMuseums';
import Profile from './Pages/Profile/Profile';
import MapMuseuns from './components/MapMuseums/MapMuseuns';
import AddMuseum from './components/AddMuseum/AddMuseum';
import QrCodeScanner from './components/QRScanner/QRCodeScanner';
import QrCodeGenerator from './components/QRScanner/QRCode/QRCode'

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
          <Route path="list" element={<ListMuseums />} />
          <Route path="map" element={<MapMuseuns />} />
        </Route>
        <Route path="/allmuseums/:id" element={<CurrentMuseum />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/qr" element={<QrCodeGenerator />} />
        <Route path="/favoritesMuseums" element={<FavoritesMuseums />} />
        <Route path="/addMuseum" element={<AddMuseum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
