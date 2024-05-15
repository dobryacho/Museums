import { useEffect } from "react";
import "./App.css";
import AllMuseums from "./Pages/AllMuseums/AllMuseums";
import { fetchAuth } from "./redux/thunkActions";
import { useAppDispatch } from "./redux/hooks";
import CurrentMuseum from "./pages/CurrentMuseum/CurrentMuseum"
import { Route, Routes } from 'react-router-dom';

function App():JSX.Element  {
const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AllMuseums />} />
      <Route path="/:id" element={<CurrentMuseum />} />
    </Routes>
  );
}

export default App;