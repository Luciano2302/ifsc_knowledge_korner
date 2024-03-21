require('dotenv').config();

const express = require('express');
const routes = require('./src/routes');
const app = express();  
const PORT = process.env.PORT;
console.log(PORT);
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
