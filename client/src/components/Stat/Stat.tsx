import React, { useState } from 'react';
import axios from 'axios';

const Stat = () => {
  const [stats, setStats] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchDailyStats = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/scans');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setErrorMessage('Ошибка при получении статистики');
    }
  };

  return (
    <div>
      <h2>Посещения музеев</h2>
      <button onClick={fetchDailyStats}>Статистика за день</button>
      {errorMessage && (
        <div className="error">
          <p>{errorMessage}</p>
        </div>
      )}
      <div>
        <h3>Результаты:</h3>
        <ul>
          {stats.map((scan) => (
            <li key={scan.id}>
              Пользователь: {scan.User.email}, Музей: {scan.Museum.name}, Дата: {new Date(scan.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stat;


