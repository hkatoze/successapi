const { Sequelize, DataTypes } = require("sequelize");

const UserModel = require("./models/User");
const FiliereModel = require("./models/Filiere");
const AdminModel = require("./models/Admin");
const TestResultatModel = require("./models/TestResultat");
const TemperamentModel = require("./models/Temperament");
const TestPersonnaliteModel = require("./models/TestPersonnalite");

const sequelize = new Sequelize(
  "u235953842_success",
  "u235953842_hkatoze",
  "Kind@1404",
  {
    host: "www.lelabo-du-numerique.com",
    dialect: "mysql",
    dialectOptions: {},
    logging: false,
  }
);

const User = UserModel(sequelize, DataTypes);
const Admin = AdminModel(sequelize, DataTypes);
const Filiere = FiliereModel(sequelize, DataTypes);
const TestResultat = TestResultatModel(sequelize, DataTypes);
const Temperament = TemperamentModel(sequelize, DataTypes);
const TestPersonnalite = TestPersonnaliteModel(sequelize, DataTypes);

const initDb = () => {
  return sequelize.sync({force:true}).then((_) => {
    console.log(`La base de données a bien été initialisée !`);
  });
};

module.exports = { initDb, User, Admin, Filiere, TestResultat, Temperament, TestPersonnalite };
