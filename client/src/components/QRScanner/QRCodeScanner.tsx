import React, { useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAddVisited } from '../../redux/thunkActionsCurrentMuseum';
import './QrCodeScanner.style.css';
import { useTranslation } from 'react-i18next';

const QrCodeScanner = () => {
  const { t } = useTranslation();

  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userSlice.user);
  const visitedMuseums = useAppSelector((store) => store.visitedSlice.visited);
 

  const handleScanClick = () => {
    if (scanning) {
      stopScanning();
    } else {
      startScanning();
    }
  };

  const startScanning = () => {
    if (videoRef.current) {
      QrScanner.hasCamera().then(hasCamera => {
        if (hasCamera) {
          setScanning(true);
          const qrScanner = new QrScanner(videoRef.current, async result => {
            stopScanning();
            setResult(result);
            await handleScanResult(result);
          });
          qrScanner.start();
        } else {
          alert('No camera found.');
        }
      });
    }
  };

  const stopScanning = () => {
    setScanning(false);
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  };

  const handleScanResult = async (result) => {
    const museumId = parseInt(result);
    if (!isNaN(museumId) && user) {
      console.log(museumId);
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/?userId=${user.id}`);
        console.log('response:', new Date(response.data[0].validity), new Date());

        if (response && new Date(response.data[0].validity) > new Date()) {
          const visitedMuseum = visitedMuseums.find(
            (vis) => vis.museumId === museumId && vis.userId === user.id
          );
          if(!visitedMuseum) {
            dispatch(fetchAddVisited({ userId: user.id, museumId }));
          }
        } else {
          setErrorMessage('Приобретите музейную карту');
        }
      } catch (error) {
        console.error('Error validating card:', error);
        setErrorMessage('Ошибка при проверке карты');
      }
    }
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <button onClick={handleScanClick}>
        {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
      <video ref={videoRef} className="scanner-video" />
      {result && (
        <div className="result">
          <span className="checkmark">✔</span>
          <h3>{t('welcome')}</h3>
        </div>
      )}
      {errorMessage && (
        <div className="error">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default QrCodeScanner;
