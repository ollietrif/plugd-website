const https = require('https');
const fs = require('fs');

const url = 'https://assets.cdn.filesafe.space/Vp4BIF23DahCIW4n0GDs/media/699ec10e9810930c3a1da9cd.png';

https.get(url, (res) => {
  const file = fs.createWriteStream('./public/station.png');
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded station.png');
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
