import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = () => {
  const [text, setText] = useState('1');

  return (
    <div>
      <h1>QR Code Generator</h1>
      <QRCode value={text} />
      <p>Сканируйте этот QR код, чтобы увидеть сообщение.</p>
    </div>
  );
};

export default QrCodeGenerator;