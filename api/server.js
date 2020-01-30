const express = require("express");

const Players = require("../players/playersModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ Player: "ready" });
});

server.get("/players", (req, res) => {
  Players.getAll()
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json(erros);
    });
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;

  Players.remove(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
