const db = require("../models");
const { createJwtToken } = require("../utils/jwtTokens");
module.exports = {
  getAllClients,
  getLoggedUser
};
async function getLoggedUser(param) {
  try {
    if (param.email) {
      const resp = await db.Users.findOne({
        where: { IsActive: true, Email: param.email },
        attributes: ["id", "Name", "RoleId", "Email", "EmployeeId"],
        include: {
          all: true,
        },
      });
      if (resp && Object.keys(resp).length) {
        const userObj = {
          Id: resp.id,
          Name: resp.Name,
          RoleId: resp.RoleId,
          Email: resp.Email,
          EmployeeId: resp.EmployeeId,
          Role: resp.Role.Name,
          Category: resp.Role.Category,
          CanWrite: resp.Role.CanWrite,
        };
        const token = createJwtToken(userObj);
        return { data: userObj, token };
      } else {
        return {
          message: "User not found",
        };
      }
    } else {
      return {
        message: "email is required",
      };
    }
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

async function getAllClients() {
  try {
    const resp = await db.Projects.findAll({
      where: { IsActive: true },
      order: [["Name", "ASC"]],
      attributes: ["Name", "id"],
    });
    return resp;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}


