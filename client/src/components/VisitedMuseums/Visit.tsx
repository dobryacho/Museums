import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { UserMuseums } from './VisitedMuseums';
import './visit.css';
import Recalls from './Recalls/Recalls';
import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function Visit() {
  const { i18n } = useTranslation();

  const [visited, setVisited] = useState<UserMuseums>({
    visitedMuseums: [],
    recalledMuseums: [],
  });

  const [update, setUpdate] = useState({});

  const user = useAppSelector((store) => store.userSlice.user);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/user/visit/${user.id}?lang=${i18n.language}`)
      .then((res) => setVisited(res.data[0]));
  }, [user, update, i18n.language]);
  console.log(visited);

  return (
    <>
      {visited?.visitedMuseums
        .sort((a, b) => b.VisitedMuseum.id - a.VisitedMuseum.id)
        .map((mus) => (
            <Stack key={mus.id} spacing={4} shadow='md' borderWidth='1px' p={5} m={5}>
            <Recalls mus={mus} setUpdate={setUpdate} visited={visited}/>
            </Stack>
        ))}
    </> 
  );
}

export default Visit;
