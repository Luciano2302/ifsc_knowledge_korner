const express = require('express');
const routes = require('./src/routes');
const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
