const { successResponse, notFound } = require("../config");
const { USER } = require("../data/index");

module.exports = (app) => {
  app.post("/api/login", (request, response) => {
    const { email: requestEmail, password: requestPassword } = request.body;
    const { email, password, token } = USER;
    if (requestEmail === email && requestPassword === password) {
      const value = { token };
      successResponse(response, value);
    } else {
      notFound(response, " " + requestEmail + " " + requestPassword);
    }
  });
  app.delete("/api/logout/:token", (request, response) => {
    const value = request.params.token;
    successResponse(response, value);
  });
};
