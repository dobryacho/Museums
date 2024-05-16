import { useEffect, useState } from 'react';
import axios from "axios";

function VisitedMuseums() {
  const [visitedMuseums, setVisitedMuseums] = useState([]);
  const user = useAppSelector((store) => store.userSlice.user);

  useEffect(()=> {
    axios.get('http://127.0.0.1:3000/api/user/visit/1').then((res)=> console.log(res.data)
    )
  })

  return (
    <>
      <div>1</div>
    </>
  );
}

export default VisitedMuseums;
