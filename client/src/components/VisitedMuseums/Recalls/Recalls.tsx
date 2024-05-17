import { Button, Textarea } from '@chakra-ui/react';
import { EdMuseum, UserMuseums } from '../VisitedMuseums';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Star from './Star/Star';

const rating = [1, 2, 3, 4, 5, 6];

type Props = {
  mus: EdMuseum;
  setUpdate: (el: any) => void;
  visited: UserMuseums;
};

function Recalls({ mus, setUpdate, visited }: Props) {
  const navigate = useNavigate();
  const [recall, setRecall] = useState({ text: '' });
  const [hover, setHover] = useState({ star: 0 });

  const handlerRating = (e: any): void => {
    axios
      .patch(`http://127.0.0.1:3000/api/visited/${e.target.id}`, {
        rating: e.target.className,
      })
      .then(() => {
        setUpdate({ rate: 2 });
      });
  };

  const handlerRecall = (e: any) => {
    if (recall.text) {
      axios
        .post(`http://127.0.0.1:3000/api/recall`, {
          text: recall.text,
          userId: visited.id,
          museumId: e.target.id,
        })
        .then(() => {
          setUpdate({ el: 0 });
        })
        .catch((err) => console.log(err));
      setRecall((pre: any) => ({ ...pre, text: '' }));
    }
  };

  const handlerDeleteRecall = (e: any) => {
    axios
      .delete(`http://127.0.0.1:3000/api/recall`, {
        data: {
          userId: visited.id,
          museumId: Number(e.target.id),
        },
      })
      .then(() => {
        setUpdate({ del: 1 });
      });
  };

  const handlerDeleteRate = (e: any) => {
    axios
      .patch(`http://127.0.0.1:3000/api/visited/${e.target.id}`, {
        rating: null,
      })
      .then(() => {
        setUpdate({ rate: 0 });
        setHover({ star: 0 });
      });
  };

  return (
    <>
      <div>
        <a href="" onClick={() => navigate(`/allmuseums/${mus.id}`)}>
          {mus.name}
        </a>
      </div>
      {visited?.recalledMuseums.find((el) => el.id === mus.id) ? (
        <div className="recall">
          <div>
            Ваш отзыв:{' '}
            {
              visited?.recalledMuseums.find((el) => el.id === mus.id)?.Recall
                ?.text
            }
          </div>
          <Button
            colorScheme="red"
            id={`${mus.id}`}
            onClick={handlerDeleteRecall}
          >
            Удалить отзыв
          </Button>
        </div>
      ) : (
        <>
          <Textarea
            value={recall.text}
            onChange={(e) =>
              setRecall((pre) => ({
                ...pre,
                text: e.target.value,
              }))
            }
          />

          <Button id={`${mus.id}`} onClick={handlerRecall}>
            Оставить отзыв
          </Button>
        </>
      )}
      {mus.VisitedMuseum.rating === null ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Оцените музей:
          {rating.map((el, i) => (
            <Star
              key={`star${el}`}
              el={el}
              i={i}
              setHover={setHover}
              handlerRating={handlerRating}
              hover={hover}
              mus={mus}
            />
          ))}
        </div>
      ) : (
        <>
          <div>Ваша оценка: {mus.VisitedMuseum.rating}</div>
          <Button
            colorScheme="red"
            id={`${mus.VisitedMuseum.id}`}
            onClick={handlerDeleteRate}
          >
            Удалить оценку
          </Button>
        </>
      )}
    </>
  );
}

export default Recalls;
