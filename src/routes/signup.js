const { ValidationError, UniqueConstraintError } = require("sequelize");
const bcrypt = require("bcrypt");
const auth = require("../auth/auth");
const { User } = require("../db/sequelize");

module.exports = (app) => {
  app.post("/api/signup", auth, (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      User.create({
        nom_et_prenom: req.body.nom_et_prenom,
        phone: req.body.phone,
        type_bac: req.body.type_bac,
        annee_bac: req.body.annee_bac,
        pays_origine: req.body.pays_origine,
        ville_origine: req.body.ville_origine,
        date_inscription: req.body.date_inscription,
      })
        .then((user) => {
          const message = `Création de compte effectuée avec succès`;

          res.json({ message, data: user });
        })
        .catch((error) => {
          if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message });
          }
          if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message });
          }

          console.log(error);
          const message = `Erreur de création de compte. Réessayer dans quelques instants.`;
          res.status(500).json({ message, data: error });
        });
    });
  });
};
