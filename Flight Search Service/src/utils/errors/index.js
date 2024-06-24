class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
  }
}

const ErrorResponse = {
  success: false,
  message: "Something went wrong!",
  data: {},
  error: {},
};

const SuccessResponse = {
  success: true,
  message: "Successfully completed the request!",
  data: {},
  error: {},
};

module.exports = {
  AppError,
  ErrorResponse,
  SuccessResponse
};