```javascript
// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serverConfig = require('./config/serverConfig');
const environmentController = require('./api/controllers/environmentController');
const userController = require('./api/controllers/userController');
const Logger = require('./utils/logger');

// Create Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up static files
app.use(express.static(path.join(__dirname, serverConfig.publicDir)));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, serverConfig.viewDir));

// Set up routes
app.use('/api/environment', environmentController);
app.use('/api/user', userController);

// Error handling middleware
app.use((err, req, res, next) => {
    Logger.error(`Error: ${err.message}`);
    res.status(err.status || 500).send({
        error: {
            message: err.message
        }
    });
});

// Start the server
app.listen(serverConfig.port, serverConfig.host, () => {
    Logger.info(`Server running at http://${serverConfig.host}:${serverConfig.port}/`);
});

module.exports = app;
```
