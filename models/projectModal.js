// const { DataTypes } = require("sequelize");

module.exports = (sequelize, { DataTypes }) => {
  const Projects = sequelize.define(
    "Projects",
    {
      ProjectName: { type: DataTypes.STRING, allowNull: false },
      ClientName: { type: DataTypes.STRING },
      Description: { type: DataTypes.STRING },
      Domain: { type: DataTypes.STRING },
      BusinessProblem: { type: DataTypes.STRING },
      Solution: { type: DataTypes.STRING },
      TechStack: { type: DataTypes.STRING },
      Design: { type: DataTypes.STRING },
      SolutionHighlights: { type: DataTypes.STRING },
      BusinessImpact: { type: DataTypes.STRING },
      StartDate: { type: DataTypes.STRING },
      EndDate: { type: DataTypes.STRING },
      ClientId: { type: DataTypes.INTEGER },
      ProjectManagerId: { type: DataTypes.INTEGER },
      IsActive: { type: DataTypes.BOOLEAN },
      IsOpen: { type: DataTypes.BOOLEAN },
    },
    {
      tableName: "[Projects]",
      timestamps: false,
      freezeTableName: true,
      schema: "SMS",
    }
  );

  return Projects;
};
