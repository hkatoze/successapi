const { TestResultat } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/testResultats/:id", auth, (req, res) => {
    const id = req.params.id;
    TestResultat.findByPk(id)
      .then((test) => {
        if (test === null) {
          const message = `Le test demandée n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        const message = `Le test a bien été reccupérée.`;

        res.json({ message, data: test });
      })
      .catch((error) => {
        const message = `La test n'a pas pu être reccupérée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
