const { successResponse, notFound } = require("../config");
const { USERS } = require("../data/index");

module.exports = (app) => {
  app.get("/api/users", (request, response) => {
    successResponse(response, USERS);
  });
  app.get("/api/users/:id", (request, response) => {
    const value = request.params.id;
    const user = USERS.data.find((val) => `${val.id}` === value);
    if (user) {
      successResponse(response, user);
    } else {
      notFound(response, ` user with id = ${value}`);
    }
  });
};
