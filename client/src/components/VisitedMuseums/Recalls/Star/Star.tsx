import { Dispatch, SetStateAction } from 'react';
import { EdMuseum } from '../../VisitedMuseums';

function Star({
  el,
  setHover,
  i,
  handlerRating,
  hover,
  mus,
}: {
  el: number;
  setHover: Dispatch<SetStateAction<{ star: number }>>;
  i: number;
  handlerRating: (e: any) => void;
  hover: { star: number };
  mus: EdMuseum;
}) {
  return (
    <div
      className={`${el}`}
      id={`${mus.VisitedMuseum.id}`}
      style={{
        width: '20px',
        fontSize: '50px',
        color: i + 1 <= hover.star ? 'tomato' : 'white',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: 'black',
        marginRight: '20px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover({ star: i + 1 })}
      onMouseLeave={() => setHover({ star: 0 })}
      onClick={handlerRating}
    >
      ★
    </div>
  );
}

export default Star;
