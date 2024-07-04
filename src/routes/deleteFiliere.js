const { Filiere } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.delete("/api/filieres/:id", auth, (req, res) => {
    const id = req.params.id;
    Filiere.findByPk(id)
      .then((filiere) => {
        if (filiere === null) {
          const message = `Cette filiere n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        return filiere.destroy({ where: { id: id } }).then((_) => {
          const message = `La filiere  a bien été supprimé.`;

          res.json({ message, data: filiere });
        });
      })
      .catch((error) => {
        const message = `Cette filiere n'a pas pu être supprimée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
