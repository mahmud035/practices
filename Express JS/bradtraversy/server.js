const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
