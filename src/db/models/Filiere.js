module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "Filiere",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Le nom de la filière est une propriété requise",
          },
          notNull: {
            msg: "Le nom de la filière est une propriété requise",
          },
        },
      },
      departement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Le departement de la filière est une propriété requise",
          },
          notNull: {
            msg: "Le departement de la filière est une propriété requise",
          },
        },
      },
      decription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "La decription de la filière est une propriété requise",
          },
          notNull: {
            msg: "La decription de la filière est une propriété requise",
          },
        },
      },

      perspectives: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Les perspectives de la filière est une propriété requise",
          },
          notNull: {
            msg: "Les perspectives de la filière est une propriété requise",
          },
        },
      },
    },
    { timestamp: true, updatedAt: false }
  );
};
