module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Temperament",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      temperamentForce: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "'temperamentForce' est une propriété requise",
          },
          notNull: {
            msg: "'temperamentForce' est une propriété requise",
          },
        },
      },
      temperamentFaiblesse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "'temperamentFaiblesse' est une propriété requise",
          },
          notNull: {
            msg: "'temperamentFaiblesse' est une propriété requise",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "'description' est une propriété requise",
          },
          notNull: {
            msg: "'description' est une propriété requise",
          },
        },
      },

      filiereRecommandee: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "'filiereRecommandee' est une propriété requise",
          },
          notNull: {
            msg: "'filiereRecommandee' est une propriété requise",
          },
        },
      },
   
    },
    { timestamp: true }
  );
};
