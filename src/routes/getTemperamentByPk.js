const { Temperament } = require("../db/sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/temperaments/:id", auth, (req, res) => {
    const id = req.params.id;
    Temperament.findByPk(id)
      .then((temperament) => {
        if (temperament === null) {
          const message = `Le temperament demandé n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }
        const message = `Le temperament a bien été reccupéré.`;

        res.json({ message, data: temperament });
      })
      .catch((error) => {
        const message = `Le temperament n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
