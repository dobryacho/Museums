import { Box, Button, ButtonGroup, Textarea } from '@chakra-ui/react';
import { RecallProps } from '../VisitedMuseums';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Star from './Star/Star';

const COLOR_STAR_VOITED: string = 'tomato';

const rating = [1, 2, 3, 4, 5, 6];

function Recalls({ mus, setUpdate, visited }: RecallProps) {
  const navigate = useNavigate();
  const [recall, setRecall] = useState({ text: '' });
  const [hover, setHover] = useState({ star: 0 });
  const [editRecall, setEditRecall] = useState(true);

  const handlerRating = (e: ChangeEvent): void => {
    if (Number(e.currentTarget.className) !== mus.VisitedMuseum.rating) {
      axios
        .patch(`http://127.0.0.1:3000/api/visited/${e.currentTarget.id}`, {
          rating: e.currentTarget.className,
        })
        .then(() => {
          setUpdate({ rate: 2 });
        })
        .catch((err) => console.log(err));
    }
  };

  const handlerRecall = (e: ChangeEvent | any): void => {
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
      setRecall(() => ({ text: '' }));
    }
  };

  const handlerDeleteRecall = () => {
    axios
      .delete(`http://127.0.0.1:3000/api/recall`, {
        data: {
          userId: visited.id,
          museumId: mus.id,
        },
      })
      .then(() => {
        setUpdate({ del: 1 });
      })
      .catch((err) => console.log(err));
  };

  const handlerEditRecall = () => {
    setEditRecall(false);
    setRecall({
      text:
        visited.recalledMuseums.find((el) => el.id === mus.id)?.Recall?.text ||
        '',
    });
  };

  const handlerUndoEditRecall = () => {
    setEditRecall(true);
    setRecall({ text: '' });
  };

  const handlerSubmitEditRecall = () => {
    axios
      .patch(`http://127.0.0.1:3000/api/recall`, {
        userId: visited.id,
        museumId: mus.id,
        text: recall.text,
      })
      .then(() => {
        setEditRecall(true);
        setRecall({ text: '' });
        setUpdate({ edt: 1 });
      })
      .catch((err) => console.log(err));
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
          {editRecall ? (
            <>
              <div>
                Ваш отзыв:{' '}
                <Box w={'60vw'} p={5}>
                  {
                    visited?.recalledMuseums.find((el) => el.id === mus.id)
                      ?.Recall?.text
                  }
                </Box>
              </div>
              <ButtonGroup size="xs" spacing="3">
                <Button colorScheme="blue" onClick={handlerEditRecall}>
                  Редактировать
                </Button>
                <Button
                  colorScheme="red"
                  id={`${mus.id}`}
                  onClick={handlerDeleteRecall}
                >
                  Удалить отзыв
                </Button>
              </ButtonGroup>
            </>
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
              <ButtonGroup size="xs" spacing="3" m={3}>
                <Button colorScheme="blue" onClick={handlerSubmitEditRecall}>
                  Изменить
                </Button>
                <Button onClick={handlerUndoEditRecall}>Отмена</Button>
              </ButtonGroup>
            </>
          )}
        </div>
      ) : (
        <>
          <Textarea
            backgroundColor={'white'}
            value={recall.text}
            onChange={(e) =>
              setRecall((pre) => ({
                ...pre,
                text: e.target.value,
              }))
            }
          />
          <Button m={3} id={`${mus.id}`} onClick={handlerRecall}>
            Оставить отзыв
          </Button>
        </>
      )}
      <div>{mus.VisitedMuseum.rating ? ('Ваша оценка: ') : ('Оцените музей: ')}</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {rating.map((el, i) => (
          <Star
            key={`star${el}`}
            el={el}
            i={i}
            setHover={setHover}
            handlerRating={handlerRating}
            hover={hover}
            mus={mus}
            color={
              el <= (mus.VisitedMuseum.rating || 0) ? COLOR_STAR_VOITED : ''
            }
          />
        ))}
      </div>
    </>
  );
}

export default Recalls;
