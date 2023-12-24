```javascript
// src/vrEngine/environment/sceneBuilder.js

const THREE = require('three');
const { environment } = require('../../config/engineConfig');
const Logger = require('../../utils/logger');

class SceneBuilder {
    constructor() {
        this.scene = null;
        this.initScene();
    }

    initScene() {
        try {
            // Create a new scene
            this.scene = new THREE.Scene();

            // Set the scene's background color
            this.scene.background = new THREE.Color(0x000000);

            Logger.info('Scene initialized successfully.');
        } catch (error) {
            Logger.error('Error initializing scene: ', error);
        }
    }

    getScene() {
        return this.scene;
    }

    addObject(object) {
        try {
            // Add the object to the scene
            this.scene.add(object);

            Logger.info('Object added to scene successfully.');
        } catch (error) {
            Logger.error('Error adding object to scene: ', error);
        }
    }

    removeObject(object) {
        try {
            // Remove the object from the scene
            this.scene.remove(object);

            Logger.info('Object removed from scene successfully.');
        } catch (error) {
            Logger.error('Error removing object from scene: ', error);
        }
    }
}

module.exports = SceneBuilder;
```
