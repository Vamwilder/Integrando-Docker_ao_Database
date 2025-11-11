import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar ao MySQL:", err);
  } else {
    console.log("✅ Conectado ao MySQL com sucesso!");
  }
});

app.get("/", (req, res) => {
  db.query("SELECT NOW() AS hora", (err, results) => {
    if (err) res.send("Erro na query");
    else res.send(`🕒 Banco respondeu: ${results[0].hora}`);
  });
});

app.listen(3001, () => console.log("🚀 Servidor rodando na porta 3001"));
