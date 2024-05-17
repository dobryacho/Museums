import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { UserMuseums } from './VisitedMuseums';
import './visit.css';
import Recalls from './Recalls/Recalls';

function Visit() {
  const [visited, setVisited] = useState<UserMuseums>({
    visitedMuseums: [],
    recalledMuseums: [],
  });

  const [update, setUpdate] = useState({});

  const user = useAppSelector((store) => store.userSlice.user);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/user/visit/${user.id}`)
      .then((res) => setVisited(res.data[0]));
  }, [user, update]);

  return (
    <>
      {visited?.visitedMuseums
        .sort((a, b) => b.VisitedMuseum.id - a.VisitedMuseum.id)
        .map((mus) => (
          <div className="visit-card" key={`mus${mus.id}`}>
            <Recalls mus={mus} setUpdate={setUpdate} visited={visited} />
          </div>
        ))}
    </> 
  );
}

export default Visit;
