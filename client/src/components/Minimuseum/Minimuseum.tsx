
type MuseumType = {
    id: number;
    name: string;
    description: string;
    location: string;
    city: string;
    photo: string;
    workedTime: string;
    holiday: string;
    createdAt: Date;
    updatedAt: Date;
  };


type MuseumProps = {
    museum: MuseumType;
  };

export default function Minimuseum({ museum }: MuseumProps): JSX.Element  {
  
  return (
    <div>
      <h3>{museum.name}</h3>
      <div>{museum.description}</div>
      <img src={museum.photo} alt={museum.name} />
    </div>
  )
}
