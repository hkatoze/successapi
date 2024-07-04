const { Temperament } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.delete("/api/temperaments/:id", auth, (req, res) => {
    const id = req.params.id;
    Temperament.findByPk(id)
      .then((temperament) => {
        if (temperament === null) {
          const message = `Ce tempérament n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        return temperament.destroy({ where: { id: id } }).then((_) => {
          const message = `Le tempérament a bien été supprimé.`;

          res.json({ message, data: temperament });
        });
      })
      .catch((error) => {
        const message = `Le tempérament n'a pas pu être supprimée. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
