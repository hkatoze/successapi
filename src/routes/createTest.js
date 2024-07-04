const { ValidationError } = require("sequelize");
const { TestPersonnalite } = require("../db/sequelize");
const auth = require("../auth/auth");


module.exports = (app) => {
  app.post("/api/testPersonnalites/", auth, (req, res) => {
    TestPersonnalite.create(req.body)
      .then((test) => {
        const message = `Nouveau test ajouté.`;

        res.json({ message, data: test });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `Le test n'a pas pu être crée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
