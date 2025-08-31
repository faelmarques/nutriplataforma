// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// exemplo de rota
app.get('/', (req, res) => {
  res.send('API do Nutriplataforma funcionando!');
});

// iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
