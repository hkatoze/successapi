module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "TestResultat",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      testId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      testResult: {
        type: DataTypes.STRING,
        allowNull: false,
         
      },
      testDate: {
        type: DataTypes.DATE,
        allowNull: false,
         
      },
    },
    { timestamp: true }
  );
};
