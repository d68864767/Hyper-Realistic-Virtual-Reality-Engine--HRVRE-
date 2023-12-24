```javascript
const THREE = require('three');
const { graphics } = require('../../config/engineConfig');
const Logger = require('../../utils/logger');

class TextureManager {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();
        this.textures = {};
    }

    loadTexture(name, path) {
        return new Promise((resolve, reject) => {
            this.textureLoader.load(
                path,
                (texture) => {
                    // On load complete
                    this.textures[name] = texture;
                    Logger.info(`Texture ${name} loaded successfully.`);
                    resolve(texture);
                },
                (xhr) => {
                    // On load progress
                    Logger.info(`Texture ${name} ${xhr.loaded / xhr.total * 100}% loaded.`);
                },
                (error) => {
                    // On load error
                    Logger.error(`Error loading texture ${name}: ${error.message}`);
                    reject(error);
                }
            );
        });
    }

    getTexture(name) {
        if (this.textures[name]) {
            return this.textures[name];
        } else {
            Logger.error(`Texture ${name} not found.`);
            return null;
        }
    }

    setTextureQuality(quality) {
        switch (quality) {
            case 'high':
                this.textureLoader.setAnisotropy(16);
                break;
            case 'medium':
                this.textureLoader.setAnisotropy(8);
                break;
            case 'low':
                this.textureLoader.setAnisotropy(4);
                break;
            default:
                Logger.error(`Invalid texture quality setting: ${quality}`);
        }
    }
}

const textureManager = new TextureManager();
textureManager.setTextureQuality(graphics.textureQuality);

module.exports = textureManager;
```
