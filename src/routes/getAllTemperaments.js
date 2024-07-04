const { Temperament } = require("../db/sequelize");
const { Op } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/temperaments", auth, (req, res) => {
    if (req.query.search) {
      const searchQuery = req.query.search;

      return Temperament.findAll({
        where: {
          temperamentForce: {
            [Op.like]: `%${searchQuery}%`,
          },
          temperamentFaiblesse: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      }).then((temperaments) => {
        const message = `La recherche pour ${searchQuery} a trouvé ${temperaments.length} résultats`;
        res.json({ message, data: temperaments });
      });
    }

   

    Temperament.findAll()
      .then((temperaments) => {
        const message = `La liste complète des temperaments a bien été reccupérée.`;

        res.json({ message, data: temperaments });
      })
      .catch((error) => {
        const message = `La liste complète des temperaments n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
