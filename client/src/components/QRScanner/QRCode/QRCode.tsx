import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '@chakra-ui/react';

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
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Создать QR код для музея</h2>
      <input
        type="text"
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <button
        onClick={handleGenerateClick}
        style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
      >
        Сгенерировать
      </button>
      {qrValue && (
        <><div style={{ marginTop: '20px' }}>
          <QRCode value={qrValue} />
        </div>
        {send ? <div>QR-код отправлен</div> : <Button onClick={handlerButton}>Отправить в музей</Button>}</>
      )}
    </div>
  );
};

export default QrCodeGenerator;