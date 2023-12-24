```javascript
// src/api/controllers/environmentController.js

const express = require('express');
const router = express.Router();
const environmentService = require('../../services/environmentService');
const Logger = require('../../utils/logger');

// Get environment details
router.get('/', async (req, res, next) => {
    try {
        const environment = await environmentService.getEnvironmentDetails();
        res.json(environment);
    } catch (err) {
        Logger.error(`Error in environmentController.get: ${err.message}`);
        next(err);
    }
});

// Update environment details
router.put('/', async (req, res, next) => {
    try {
        const updatedEnvironment = await environmentService.updateEnvironmentDetails(req.body);
        res.json(updatedEnvironment);
    } catch (err) {
        Logger.error(`Error in environmentController.put: ${err.message}`);
        next(err);
    }
});

module.exports = router;
```
