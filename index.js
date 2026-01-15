const express = require("express");
const app = express();

app.use(express.json());

// Endpoint de cálculo de frete
app.post("/frete", (req, res) => {
  const { distancia_km } = req.body;

  if (!distancia_km || distancia_km <= 0) {
    return res.json({ erro: "Distância inválida" });
  }

  // Até 5 km
  if (distancia_km <= 5) {
    return res.json({
      tipo: "motoboy",
      distancia_km,
      valor_frete: 10.00
    });
  }

  // De 6 a 100 km
  if (distancia_km <= 100) {
    return res.json({
      tipo: "motoboy",
      distancia_km,
      valor_frete: distancia_km * 2
    });
  }

  // Acima de 100 km
  return res.json({
    tipo: "correios",
    mensagem:
      "Para essa distância, a entrega é realizada pelos Correios. Deseja que verifiquemos o valor do frete com o vendedor?"
  });
});

// Porta usada pelo Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
