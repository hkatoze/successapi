const { User } = require("../db/sequelize");
const { ValidationError } = require("sequelize");
const auth = require("../auth/auth");

module.exports = (app) => {
  app.put("/api/users/:userId", auth, (req, res) => {
    const id = req.params.userId;

    User.findByPk(id)
      .then((user) => {
        if (user === null) {
          const message = `L'utilisateur demandé n'existe pas. Réessayer avec un autre identifiant.`;

          return res.status(404).json({ message });
        }

        User.update(req.body, { where: { id: id } }).then((_) => {

          const user = await User.findOne({ where: { id } });
      if (!user) {
        return res
          .status(404)
          .json({
            message: "Cet utilisateur n'existe pas. Réessayer avec un autre identifiant.",
          });
      }
      const message = `L'utilisateur a bien été modifié.`;
      res.json({ message, data: user });
        });
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        const message = `L'utilisateur n'a pas pu être modifié. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
