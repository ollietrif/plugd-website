const https = require('https');
const fs = require('fs');

https.get('https://www.plugd.co.uk', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      images.push(match[1]);
    }
    console.log(images.join('\n'));
  });
});
