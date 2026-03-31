const https = require('https');

https.get('https://www.plugd.co.uk/support', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
});
