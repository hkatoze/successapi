const { ValidationError } = require("sequelize");
const { TestResultat } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.post("/api/testResultats/", auth, (req, res) => {
    TestResultat.create(req.body)
      .then((test) => {
        const message = `Nouveau test effectué.`;

        res.json({ message, data: test });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `Le test n'a pas pu être réalisé. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
