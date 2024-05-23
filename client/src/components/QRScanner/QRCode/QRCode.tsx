import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import emailjs from 'emailjs-com';
import { Button } from '@chakra-ui/react';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleGenerateClick = () => {
    setQrValue(text);
    setText('');
  };

  const handleSendEmailClick = () => {
    if (!qrValue || !email) {
      setMessage('Please generate a QR code and enter an email address.');
      return;
    }

    const canvas = document.querySelector('canvas');
    const qrCodeDataUrl = canvas.toDataURL('image/png');

    const emailParams = {
      to_email: email,
      qr_code: qrCodeDataUrl,
    };

    emailjs.send('service_06b9fyb', 'template_lw66k39', emailParams, 'pcSU7CXUZlx1r5HnZ')
      .then((response) => {
        setMessage('QR код отправлен в музей');
        setEmail('');
      })
      .catch((error) => {
        console.error('Failed to send QR code:', error);
        setMessage('Failed to send QR code.');
      });
  };

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
        <div style={{ marginTop: '20px' }}>
          <QRCode value={qrValue} />
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <button
          onClick={handleSendEmailClick}
          style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
        >
          Отправить
        </button>
      </div>
      {message && (
        <p style={{ marginTop: '20px', color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default QrCodeGenerator;
