import axios from "axios";
import { useEffect, useState } from "react";
import Minimuseum from "../../components/Minimuseum/Minimuseum";

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

type Museums = Array<MuseumType>;
  
export default function AllMuseums() {
  
  const [museums, setMuseums] = useState<Museums>([]);

  useEffect(() => {
    axios.get<Museums>('http://localhost:3000/api/museums').then((res) => {
      console.log(res);
      setMuseums(res.data);
    });
  }, []);


  return (
    <div>
      {museums.length ? (
        museums.map((museum) => (
          <Minimuseum key={museum.id} museum={museum} />
        ))
      ) : (
        <h3>Нет доступных музеев</h3>
      )}
    </div>
  )
}
