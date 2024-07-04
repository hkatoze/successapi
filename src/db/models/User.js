module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom_et_prenom: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      type_bac: {
        type: DataTypes.STRING,
      },
      annee_bac: {
        type: DataTypes.STRING,
      },
      pays_origine: {
        type: DataTypes.STRING,
      },

      ville_origine: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      date_inscription: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamp: true }
  );
};
