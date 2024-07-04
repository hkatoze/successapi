 
const { TestResultat } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.delete("/api/testResultats/:id", auth, (req, res) => {
    const id = req.params.id;
    TestResultat.findByPk(id)
      .then((test) => {
        if (test === null) {
          const message = `Ce test n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        return test.destroy({ where: { id: id } }).then((_) => {
          const message = `Le test a bien été supprimé.`;

          res.json({ message, data: test });
        });
      })
      .catch((error) => {
        const message = `Le test n'a pas pu être supprimée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
