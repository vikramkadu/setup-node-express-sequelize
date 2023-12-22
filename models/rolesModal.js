module.exports = (sequelize, { DataTypes }) => {
  const Role = sequelize.define(
    "Role",
    {
      Name: { type: DataTypes.STRING },
      Category: { type: DataTypes.STRING },
      IsActive: { type: DataTypes.BOOLEAN },
      CanWrite: { type: DataTypes.BOOLEAN },
    },
    {
      tableName: "[Role]",
      timestamps: false,
      freezeTableName: true,
      schema: "UserMgmt",
    }
  );

  return Role;
};
