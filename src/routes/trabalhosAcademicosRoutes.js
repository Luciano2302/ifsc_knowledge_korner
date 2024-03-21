const { Router } = require('express');
const router = Router();

router.get('/trabalhos-academicos', (req, res) => { res.send("Teste rota"); });

module.exports = router;