const { TestResultat } = require("../db/sequelize");
const { Op } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.get("/api/testResultats", auth, (req, res) => {
    if (req.query.search) {
      const searchQuery = req.query.search;

      return TestResultat.findAll({
        where: {
          testResult: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      }).then((test) => {
        const message = `La recherche pour ${searchQuery} a trouvé ${test.length} résultats`;
        res.json({ message, data: test });
      });
    }
    
    TestResultat.findAll()
      .then((test) => {
        const message = `La liste complète des test a bien été reccupérée.`;

        res.json({ message, data: test });
      })
      .catch((error) => {
        const message = `La liste complète des tests n'a pas pu être reccupéré. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
