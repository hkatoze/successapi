const { Filiere } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/filieres/:id", auth, (req, res) => {
    const id = req.params.id;
    Filiere.findByPk(id)
      .then((filiere) => {
        if (filiere === null) {
          const message = `La filiere demandé n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        const message = `La filière a bien été reccupéré.`;

        res.json({ message, data: filiere });
      })
      .catch((error) => {
        const message = `La filiere n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
