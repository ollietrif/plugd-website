const https = require('https');
const fs = require('fs');

const url = 'https://assets.cdn.filesafe.space/Vp4BIF23DahCIW4n0GDs/media/6981bd901f68d1f1b3479e3f.svg';

https.get(url, (res) => {
  const file = fs.createWriteStream('./public/logo.svg');
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded logo.svg');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
