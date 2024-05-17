import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { UserMuseums } from './VisitedMuseums';
import { Button, Textarea } from '@chakra-ui/react';
import './visit.css'

const rating = [1, 2, 3, 4, 5];

function Visit() {
  const [visited, setVisited] = useState<UserMuseums>({
    visitedMuseums: [],
    recalledMuseums: [],
  });
  const [hover, setHover] = useState({});
  const [recall, setRecall] = useState({});
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
        .sort((a, b) => a.id - b.id)
        .map((mus) => (
          <div key={mus.id}>
            <div>{mus.name}</div>
            {visited?.recalledMuseums.find((el) => el.id === mus.id) ? (
              <div className='recall'>
                Ваш отзыв:{' '}
                {
                  visited?.recalledMuseums.find((el) => el.id === mus.id)
                    ?.Recall?.text
                }
              </div>
            ) : (
              <>
                <Textarea
                  value={recall?.[`some${mus.id}`]}
                  onChange={(e) =>
                    setRecall((pre) => ({
                      ...pre,
                      [`some${mus.id}`]: e.target.value,
                    }))
                  }
                />

                <Button
                  onClick={() => {
                    axios.post(`http://127.0.0.1:3000/api/recall`, {
                      text: recall?.[`some${mus.id}`],
                      userId: user.id,
                      museumId: mus.id,
                    }).catch((err) => console.log(err)
                    );
                    setUpdate({ el: mus.id });
                  }}
                >
                  Оставить отзыв
                </Button>
              </>
            )}
            {mus.VisitedMuseum.rating === null ? (
              <div style={{ display: 'flex', 
              alignItems: 'center' }}> Оцените музей:
                {rating.map((el, i) => (
                  <div
                    key={el}
                    style={{
                      width: '20px',
                      fontSize: '50px',
                      color: i + 1 <= hover?.[`${mus.id}`] ? 'tomato' : 'white',
                      WebkitTextStrokeWidth: '1px',
                      WebkitTextStrokeColor: 'black',
                      marginRight: '20px',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHover({ [`${mus.id}`]: i + 1 })}
                    onMouseLeave={() => setHover({})}
                    onClick={() => {
                      axios.patch(
                        `http://127.0.0.1:3000/api/visited/${mus.VisitedMuseum.id}`,
                        {
                          rating: el,
                        },
                      );
                      setUpdate({ rate: el });
                    }}
                  >
                    ★
                  </div>
                ))}
              </div>
            ) : (
              <div>Ваша оценка: {mus.VisitedMuseum.rating}</div>
            )}
          </div>
        ))}
    </>
  );
}

export default Visit;
