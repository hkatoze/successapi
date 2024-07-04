const { Filiere } = require("../db/sequelize");
const { ValidationError } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.put("/api/filieres/:id", auth, (req, res) => {
    const id = req.params.id;

    Filiere.update(req.body, { where: { id: id } })
      .then((filiere) => {
        return Filiere.findByPk(id).then((filiere) => {
          if (filiere === null) {
            const message = `La filiere demandée n'existe pas. Réessayer avec un autre identifiant.`;

            return res.status(404).json({ message });
          }
          const message = `La filiere a bien été modifié.`;

          res.json({ message, data: filiere });
        });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `La filiere n'a pas pu être modifié. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
