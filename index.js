const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Escuta QUALQUER rota e QUALQUER método
app.all("*", (req, res) => {
  console.log("METHOD:", req.method);
  console.log("PATH:", req.path);
  console.log("BODY:", req.body);
  console.log("QUERY:", req.query);

  res.status(200).send(
    "✅ Servidor conectado com sucesso!\n\n" +
    "Dados recebidos:\n\n" +
    JSON.stringify(
      Object.keys(req.body).length ? req.body : req.query,
      null,
      2
    )
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor ativo na porta", PORT);
});
