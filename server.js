#!/usr/bin/env node

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(req => {
  console.log(req.method, req.url);
});

app.listen(8080, () => {
  console.log(`Server listening 8080 ...`);
});
