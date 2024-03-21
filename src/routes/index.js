const express = require('express');
const trabalhosAcademicos = require('./trabalhosAcademicosRoutes.js');

const app = express();

app.use(
  express.json(),
  trabalhosAcademicos
);

module.exports = app;