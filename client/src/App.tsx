import { useEffect } from "react";
import "./App.css";
import AllMuseums from "./pages/AllMuseums/AllMuseums";
import { fetchAuth } from "./redux/thunkActions";
import { useAppDispatch } from "./redux/hooks";

function App():JSX.Element  {
const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  return (
  <>
  <AllMuseums />
  </>
  )
}

export default App;
