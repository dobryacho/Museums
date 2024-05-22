import { Box, Button, ButtonGroup, Stack, Textarea } from '@chakra-ui/react';
import { RecallProps } from '../VisitedMuseums';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Star from './Star/Star';
import styles from './Recalls.module.css';
import { useTranslation } from 'react-i18next';

const COLOR_STAR_VOITED: string = 'tomato';

const rating = [1, 2, 3, 4, 5, 6];

function Recalls({ mus, setUpdate, visited }: RecallProps) {
  const { t } = useTranslation();
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
        <Link to={`/allmuseums/${mus.id}`}>{mus?.name_en || mus?.name_de || mus?.name}</Link>
      </div>
      <Stack spacing={4} borderWidth="1px" p={1}>
        {visited?.recalledMuseums.find((el) => el.id === mus.id) ? (
          <div>
            {editRecall ? (
              <>
                <div>
                  {t('yourReview')}{' '}
                  <Box w={'60vw'} p={5}>
                    {
                      visited?.recalledMuseums.find((el) => el.id === mus.id)
                        ?.Recall?.text
                    }
                  </Box>
                </div>
                <ButtonGroup size="xs" spacing="3">
                  <Button colorScheme="blue" onClick={handlerEditRecall}>
                  {t('edit')}
                  </Button>
                  <Button
                    colorScheme="red"
                    id={`${mus.id}`}
                    onClick={handlerDeleteRecall}
                  >
                    {t('deleteReview')}
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
                  {t('change')}
                  </Button>
                  <Button onClick={handlerUndoEditRecall}>{t('cancel')}</Button>
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
            <Button
              className={styles.recall_btn}
              m={3}
              id={`${mus.id}`}
              onClick={handlerRecall}
            >
              {t('placeReview')}
            </Button>
          </>
        )}
      </Stack>
      <Stack>
        <div>
          {mus.VisitedMuseum.rating ? t('yourReview') : t('rateMuseum')}
        </div>
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
      </Stack>
    </>
  );
}

export default Recalls;
