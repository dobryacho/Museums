import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '@chakra-ui/react';
import styles from './QRCode.module.css';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [send, setSend] = useState(false);

  const handleGenerateClick = () => {
    setQrValue(text);
    setText('');
  };

  const handlerButton = () => {
    setSend(!send);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Создать QR код для музея</h2>
      <input
        className={styles.museumId}
        type="text"
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />

      <Button
        variant="solid"
        colorScheme="blue"
        cursor="pointer"
        onClick={handleGenerateClick}
      >
        Сгенерировать
      </Button>

      {qrValue && (
        <>
          <div style={{ marginTop: '20px' }}>
            <QRCode value={qrValue} />
          </div>
          {send ? (
            <div>QR-код отправлен</div>
          ) : (
            <Button
              variant="solid"
              colorScheme="teal"
              cursor="pointer"
              onClick={handlerButton}
            >
              Отправить в музей
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default QrCodeGenerator;
