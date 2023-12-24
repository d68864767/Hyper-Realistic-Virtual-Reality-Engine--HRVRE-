```javascript
// src/services/environmentService.js

const THREE = require('three');
const { environment } = require('../config/engineConfig');
const Logger = require('../utils/logger');
const SceneBuilder = require('../vrEngine/environment/sceneBuilder');
const LightingManager = require('../vrEngine/environment/lightingManager');

class EnvironmentService {
    constructor() {
        this.sceneBuilder = new SceneBuilder();
        this.lightingManager = new LightingManager();
    }

    // Method to initialize the environment
    initializeEnvironment() {
        Logger.info('Initializing environment...');

        // Create the scene
        const scene = this.sceneBuilder.buildScene();

        // Set up the lighting
        this.lightingManager.setupLighting(scene);

        Logger.info('Environment initialized successfully.');
        return scene;
    }

    // Method to update the environment
    updateEnvironment(scene, deltaTime) {
        // Update the scene
        this.sceneBuilder.updateScene(scene, deltaTime);

        // Update the lighting
        this.lightingManager.updateLighting(scene, deltaTime);
    }
}

module.exports = EnvironmentService;
```
