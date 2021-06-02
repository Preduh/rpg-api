const express = require("express");
const Player = require("../models/player");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    if (req.body.nivel_de_poder <= 10) {
      const player = await Player.create(req.body);

      return res.send({ player });
    } else {
      return res.send({ Error: "Nível de poder acima do permitido!" });
    }
  } catch (err) {
    return res.send({ error: "Registration failed!" });
  }
});

router.get("/players", async (req, res) => {
  const players = await Player.find({});

  let playersData = [];

  players.map((player) => {
    playersData.push({
      id: player._id,
      jogador: player.jogador,
      heroi: player.heroi,
      nivel_de_poder: player.nivel_de_poder,
      imagem_url: player.imagem_url,
      vida: player.vida
    });
  });

  return res.send({ playersData });
});

router.put("/atualizar/:playerId", async (req, res) => {
  try {
    await Player.findByIdAndUpdate(req.params.playerId, req.body);

    const playerAtualizado = await Player.findById(req.params.playerId);

    return res.send({ playerAtualizado });
  } catch (err) {
    return res.send(err);
  }
});

router.get("/player/:playerId", async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId)

    return res.send({ player })
  } catch (err) {
    return res.send({ error: "Jogador não encontrado!" });
  }
});

module.exports = (app) => app.use(router);
