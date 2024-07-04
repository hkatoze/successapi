
const { ValidationError } = require("sequelize");
const { TestPersonnalite } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.put("/api/testPersonnalites/:id", auth, (req, res) => {
    const id = req.params.id;

    TestPersonnalite.update(req.body, { where: { id: id } })
      .then((test) => {
        return TestPersonnalite.findByPk(id).then((test) => {
          if (test === null) {
            const message = `Le test demandé n'existe pas. Réessayer avec un autre identifiant.`;

            return res.status(404).json({ message });
          }
          const message = `Le test a bien été modifié.`;

          res.json({ message, data: test });
        });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `Le test n'a pas pu être modifié. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
