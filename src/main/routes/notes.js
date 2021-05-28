const { successResponse } = require("../config");
const { NOTES } = require("../data/index");

module.exports = (app) => {
  app.get("/api/notes", (request, response) => {
    successResponse(response, NOTES);
  });
  app.post("/api/note", (request, response) => {
    const { value } = request.body;
    NOTES.push(value);
    successResponse(response, value);
  });
};
