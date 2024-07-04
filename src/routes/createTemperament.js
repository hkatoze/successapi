const { ValidationError } = require("sequelize");
const { Temperament } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.post("/api/temperaments/", auth, (req, res) => {
    Temperament.create(req.body)
      .then((temperament) => {
        const message = `Nouveau temperament ajouté.`;

        res.json({ message, data: temperament });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `Le temperament n'a pas pu être crée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
