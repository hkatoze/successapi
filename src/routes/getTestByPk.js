const { TestPersonnalite } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/testPersonnalites/:id", auth, (req, res) => {
    const id = req.params.id;
    TestPersonnalite.findByPk(id)
      .then((test) => {
        if (test === null) {
          const message = `Le test demandé n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        const message = `Le test a bien été reccupéré.`;

        res.json({ message, data: test });
      })
      .catch((error) => {
        const message = `Le test n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
