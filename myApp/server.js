const express = require('express');
const path = require('path');
const parser = require('body-parser')
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true}))
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist', 'myApp')))
require('./server/config/database')

app.use(require('./server/config/routes'))
app.listen(port, () => console.log(`Express server listening on port ${port}`))
