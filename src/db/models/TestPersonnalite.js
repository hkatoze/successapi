module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "TestPersonnalite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      libelle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
       

      creationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamp: true, updatedAt: false }
  );
};
