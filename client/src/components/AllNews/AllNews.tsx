import { useState, useEffect } from 'react';

export default function Navbar() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getAllMuseums = async () => {
      const response = await fetch('http://localhost:3000/api/news');
      const data = await response.json();
      setNews(data);
    };

    getAllMuseums();
  }, []);

  return <div></div>;
}
