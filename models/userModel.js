module.exports = (sequelize, { DataTypes }) => {
  const Users = sequelize.define(
    "Users",
    {
      Name: { type: DataTypes.STRING },
      RoleId: { type: DataTypes.INTEGER },
      Email: { type: DataTypes.STRING },
      Mobile: { type: DataTypes.STRING },
      EmployeeId: { type: DataTypes.INTEGER },
      ManagerId: { type: DataTypes.INTEGER },
      // CreatedBy: { type: DataTypes.INTEGER },
      // CreatedDate: { type: DataTypes.STRING },
      // UpdatedBy: { type: DataTypes.INTEGER },
      // UpdatedDate: { type: DataTypes.STRING },
      IsActive: { type: DataTypes.BOOLEAN },
      Department: { type: DataTypes.STRING },
    },
    {
      tableName: "[Users]",
      timestamps: false,
      freezeTableName: true,
      schema: "UserMgmt",
    }
  );

  return Users;
};
