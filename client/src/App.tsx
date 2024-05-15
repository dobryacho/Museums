import "./App.css";
import AllMuseums from "./pages/AllMuseums/AllMuseums";
import CurrentMuseum from "./pages/CurrentMuseum/CurrentMuseum"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMuseums />} />
      <Route path="/:id" element={<CurrentMuseum />} />
    </Routes>
  );
}

export default App;