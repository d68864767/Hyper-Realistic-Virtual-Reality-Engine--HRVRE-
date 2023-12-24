```javascript
const THREE = require('three');
const { environment } = require('../../config/engineConfig');
const Logger = require('../../utils/logger');

class LightingManager {
    constructor() {
        this.lightingType = environment.lightingManager;
        this.lights = [];
    }

    // Method to initialize lighting based on the configuration
    initializeLighting(scene) {
        Logger.info(`Initializing ${this.lightingType} lighting...`);

        switch (this.lightingType) {
            case 'dynamic':
                this.initializeDynamicLighting(scene);
                break;
            case 'static':
                this.initializeStaticLighting(scene);
                break;
            default:
                Logger.error(`Unknown lighting type: ${this.lightingType}`);
                throw new Error(`Unknown lighting type: ${this.lightingType}`);
        }
    }

    // Method to initialize dynamic lighting
    initializeDynamicLighting(scene) {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 0);

        this.lights.push(ambientLight, directionalLight);

        this.lights.forEach(light => scene.add(light));

        Logger.info('Dynamic lighting initialized.');
    }

    // Method to initialize static lighting
    initializeStaticLighting(scene) {
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);

        this.lights.push(ambientLight);

        this.lights.forEach(light => scene.add(light));

        Logger.info('Static lighting initialized.');
    }

    // Method to update lighting for dynamic scenes
    updateLighting(time) {
        if (this.lightingType === 'dynamic') {
            // Update lighting based on time or other dynamic factors
            // This is just a placeholder and should be replaced with actual logic
            this.lights.forEach(light => {
                light.intensity = (Math.sin(time) + 1.0) / 2.0;
            });
        }
    }
}

module.exports = LightingManager;
```
