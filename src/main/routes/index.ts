const login = require("./login");
const users = require("./users");
const notes = require("./notes");

const RouteApplier = [login, users, notes];

module.exports = (app: unknown) => RouteApplier.forEach((apply) => apply(app));
