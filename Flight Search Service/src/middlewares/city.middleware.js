const { StatusCodes } = require("http-status-codes");

const { AppError, ErrorResponse } = require("../utils/errors/");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Failed to create a City";
    ErrorResponse.error = new AppError(
      ["The City Name was not found in the incoming request"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
function validateUpdateRequest(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    ErrorResponse.message = "Failed to update an City";
    ErrorResponse.error = new AppError(
      ["The Data was not found in the incoming request"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
  validateUpdateRequest
};