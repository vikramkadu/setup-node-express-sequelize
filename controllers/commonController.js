// const express = require("express");
// const router = express.Router();
// router.get("/clients", getAll);
const commonService = require("../services/commonService");
async function userLogin(req, res, next) {
  console.log("req", req);
  await commonService
    .getLoggedUser(req.query)
    .then((token) => res.json(token))
    .catch(next);
}
async function getClients(req, res, next) {
  try {
    await commonService
      .getAllClients()
      .then((clients) => {
        res.status(200);
        res.json({ data: clients });
      })
      .catch((err) => {
        res.json({ data: "clients khushbu" });
      });
  } catch (error) {
    res.status(400);
    res.json({ ...error, name: "khushbu" });
  }
}
async function getProjects(req, res, next) {
  await commonService
    .getAllProjects(req.query)
    .then((projects) => res.json({ data: projects }))
    .catch(next);
}
module.exports = { getClients, getProjects, userLogin };
