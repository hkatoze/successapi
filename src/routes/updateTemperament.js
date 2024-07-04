const { Temperament } = require("../db/sequelize");
const { ValidationError } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.put("/api/temperaments/:id", auth, (req, res) => {
    const id = req.params.id;

    Temperament.update(req.body, { where: { id: id } })
      .then((temperament) => {
        return Temperament.findByPk(id).then((temperament) => {
          if (temperament === null) {
            const message = `Le temperament demandé n'existe pas. Réessayer avec un autre identifiant.`;

            return res.status(404).json({ message });
          }
          const message = `Le temperament a bien été modifié.`;

          res.json({ message, data: temperament });
        });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `Le temperament n'a pas pu être modifié. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
