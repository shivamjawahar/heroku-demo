const express = require('express');
const app = express();

// Important for cloud platforms: use their dynamic port or fallback to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Your PaaS app is working.');
});

app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});
