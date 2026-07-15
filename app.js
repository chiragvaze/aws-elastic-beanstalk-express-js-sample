const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!,welcome to earth.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
