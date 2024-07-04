const { ValidationError } = require("sequelize");
const { Filiere } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.post("/api/filieres/", auth, (req, res) => {
    Filiere.create(req.body)
      .then((filiere) => {
        const message = `La filiere  a bien été crée.`;

        res.json({ message, data: filiere });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `La filiere n'a pas pu être crée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
