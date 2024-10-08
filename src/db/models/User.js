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
      genre: {
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

      dominantForceTemperament: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      dominantWeaknessTemperament: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      temperament: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      skills: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      authentificationCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
    },
    { timestamp: true }
  );
};
