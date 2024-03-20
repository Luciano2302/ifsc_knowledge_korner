const { Router } = require('express');
const router = Router();

router.get('/trabalhos-academicos', (req, res) => { return "Teste rota" });

module.exports = router;