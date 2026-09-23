const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.json({ service: 'Orders Service', status: 'healthy', language: 'Node.js' });
});

app.listen(PORT, () => {
  console.log(`Orders service running on port ${PORT}`);
});