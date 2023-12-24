```javascript
const THREE = require('three');
const { graphics } = require('../../config/engineConfig');
const Logger = require('../../utils/logger');

class Renderer {
    constructor() {
        this.renderer = null;
        this.initRenderer();
    }

    initRenderer() {
        try {
            // Check if WebGL is supported
            if (!THREE.WebGLRenderer.isWebGLAvailable()) {
                Logger.error('WebGL is not available in your browser.');
                return;
            }

            // Create a new WebGL renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true });

            // Set the renderer's size to the window's size
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            // Set the renderer's pixel ratio
            this.renderer.setPixelRatio(window.devicePixelRatio);

            // Set the clear color and the clear alpha
            this.renderer.setClearColor(0x000000, 1);

            // Enable shadow mapping
            this.renderer.shadowMap.enabled = true;

            // Set the shadow map type
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            // Set the texture quality
            this.setTextureQuality(graphics.textureQuality);

            Logger.info('Renderer initialized successfully.');
        } catch (error) {
            Logger.error(`Renderer initialization failed: ${error.message}`);
        }
    }

    setTextureQuality(quality) {
        switch (quality) {
            case 'high':
                this.renderer.capabilities.maxAnisotropy = 16;
                break;
            case 'medium':
                this.renderer.capabilities.maxAnisotropy = 8;
                break;
            case 'low':
                this.renderer.capabilities.maxAnisotropy = 4;
                break;
            default:
                Logger.warn(`Unknown texture quality setting: ${quality}. Defaulting to high.`);
                this.renderer.capabilities.maxAnisotropy = 16;
                break;
        }
    }

    getRenderer() {
        return this.renderer;
    }
}

module.exports = Renderer;
```
