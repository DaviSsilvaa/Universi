const express = require('express');
const cors = require('cors'); // Importe o módulo cors
const app = express();
const port = 8080;

// Configure o middleware cors para permitir solicitações de origens específicas
app.use((req, res, next) => {
    // Qualquer endereço pode fazer a requisição "*"
    res.header("Access-Control-Allow-Origin", "*")

    // Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")

    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type")

    // Executar o cors
    app.use(cors());

    // Quando não houver erro deve continuar o processamento
    next();

});
// Suas rotas e outras configurações vão aqui

app.listen(port, () => {

  console.log(`Servidor está executando na porta ${port}`);
});