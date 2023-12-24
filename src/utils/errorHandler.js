```javascript
const Logger = require('./logger');

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error details
  Logger.error(`Error: ${err.message}`);

  // Set HTTP status code
  let statusCode = err.statusCode || 500;

  // In development mode, send detailed error message
  if (process.env.NODE_ENV === 'development') {
    res.status(statusCode).json({
      status: 'error',
      error: {
        message: err.message,
        stack: err.stack,
      },
    });
  } else {
    // In production mode, send generic error message
    res.status(statusCode).json({
      status: 'error',
      error: {
        message: 'Internal Server Error',
      },
    });
  }
};

module.exports = errorHandler;
```
