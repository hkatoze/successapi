const { User } = require("../db/sequelize");
const { Op } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/users", auth, (req, res) => {
    if (req.query.search) {
      const searchQuery = req.query.search;

      return User.findAll({
        where: {
          nom_et_prenom: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      }).then((users) => {
        const message = `La recherche pour ${searchQuery} a trouvé ${users.length} résultats`;
        res.json({ message, data: users });
      });
    }

    if (req.query.temperamentIsNul === "true") {
      return User.findAll({
        where: {
          temperament: {
            [Op.is]: null,
          },
        },
      }).then((users) => {
        const message = `Les utilisateurs dont le tempérament est nul sont au nombre de ${users.length}`;
        res.json({ message, data: users });
      });
    }

    User.findAll()
      .then((users) => {
        const message = `La liste complète des utilisateurs a bien été récupérée.`;
        res.json({ message, data: users });
      })
      .catch((error) => {
        const message = `La liste complète des utilisateurs n'a pas pu être récupérée. Réessayez dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
