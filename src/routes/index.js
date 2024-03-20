const express = require('express');
const trabalhosAcademicos = require('./trabalhosAcademicosRoutes.js');

module.exports = app => {
  app.use(
    express.json(),
    trabalhosAcademicos
   );
};