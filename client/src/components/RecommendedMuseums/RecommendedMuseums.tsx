import { useState, useEffect } from 'react';

export default function Navbar() {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    const getAllMuseums = async () => {
      const response = await fetch('http://localhost:3000/api/museums');
      const data = await response.json();

      const recommendedMuseums = data.slice(0, 5);
      setMuseums(recommendedMuseums);
    };

    getAllMuseums();
  }, []);

  return (
    <div>
      {museums.map((museum) => (
        <div key={museum.id}>
          <img src={museum.photo} alt="Фото музея" />
          <h4>{museum.name}</h4>
          <p>{museum.location}</p>
        </div>
      ))}
    </div>
  );
}
