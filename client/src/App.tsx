import { useEffect } from 'react';
import './App.css';
import AllMuseums from './pages/AllMuseums/AllMuseums';
import { fetchAuth } from './redux/thunkActions';
import { useAppDispatch } from './redux/hooks';
import CurrentMuseum from './pages/CurrentMuseum/CurrentMuseum';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

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
        <Route path="/allmuseums" element={<AllMuseums />} />
        <Route path="/allmuseums/:id" element={<CurrentMuseum />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
