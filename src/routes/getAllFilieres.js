const { Filiere } = require("../db/sequelize");
const { Op } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/filieres", auth, (req, res) => {
    if (req.query.search) {
      const searchQuery = req.query.search;

      return Filiere.findAll({
        where: {
          nom: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      }).then((filieres) => {
        const message = `La recherche pour ${searchQuery} a trouvé ${filieres.length} résultats`;
        res.json({ message, data: filieres });
      });
    }
    Filiere.findAll()
      .then((filieres) => {
        const message = `La liste complète des filieres a bien été reccupérée.`;

        res.json({ message, data: filieres });
      })
      .catch((error) => {
        const message = `La liste complète des filieres n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
