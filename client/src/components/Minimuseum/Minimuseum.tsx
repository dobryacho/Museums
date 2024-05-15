import { Link } from "react-router-dom";

type MuseumType = {
    id: number;
    name: string;
    description: string;
    location: string;
    city: string;
    photo: string;
    workedTime: string;
    holiday: string;
    theme: string;
    createdAt: Date;
    updatedAt: Date;
  };


type MuseumProps = {
    museum: MuseumType;
  };

export default function Minimuseum({ museum }: MuseumProps): JSX.Element  {
  
  return (
    <div>
      <Link to={`/allmuseums/:id`}>
        <h3>{museum.name}</h3>
      </Link>
      <div>{museum.description}</div>
      <Link to={`/allmuseums/:id`}>
        <img src={museum.photo} alt={museum.name} />
      </Link>
    </div>
  )
}
