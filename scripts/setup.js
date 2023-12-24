```javascript
// scripts/setup.js

const fs = require('fs');
const path = require('path');
const serverConfig = require('../src/config/serverConfig');
const engineConfig = require('../src/config/engineConfig');
const Logger = require('../src/utils/logger');

const setup = () => {
    try {
        // Create directories if they don't exist
        const directories = [
            serverConfig.appRoot,
            serverConfig.publicDir,
            serverConfig.viewDir,
            serverConfig.logDir,
            path.join(serverConfig.appRoot, 'api'),
            path.join(serverConfig.appRoot, 'config'),
            path.join(serverConfig.appRoot, 'vrEngine'),
            path.join(serverConfig.appRoot, 'services'),
            path.join(serverConfig.appRoot, 'utils'),
            path.join(serverConfig.appRoot, 'vrEngine', 'graphics'),
            path.join(serverConfig.appRoot, 'vrEngine', 'physics'),
            path.join(serverConfig.appRoot, 'vrEngine', 'ai'),
            path.join(serverConfig.appRoot, 'vrEngine', 'environment'),
        ];

        directories.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                Logger.info(`Created directory: ${dir}`);
            }
        });

        // Create .env file if it doesn't exist
        if (!fs.existsSync('.env')) {
            const envConfig = `
                HOST=${serverConfig.host}
                PORT=${serverConfig.port}
                NODE_ENV=${serverConfig.env}
                LOG_DIR=${serverConfig.logDir}
                APP_ROOT=${serverConfig.appRoot}
                PUBLIC_DIR=${serverConfig.publicDir}
                VIEW_DIR=${serverConfig.viewDir}
                SESSION_SECRET=${serverConfig.sessionSecret}
                SESSION_MAX_AGE=${serverConfig.sessionMaxAge}
                RENDERER=${engineConfig.graphics.renderer}
                TEXTURE_QUALITY=${engineConfig.graphics.textureQuality}
                PHYSICS_ENGINE=${engineConfig.physics.engine}
                GRAVITY=${engineConfig.physics.gravity}
                NPC_BEHAVIOR=${engineConfig.ai.npcBehavior}
                INTERACTIVE_ELEMENTS=${engineConfig.ai.interactiveElements}
                SCENE_BUILDER=${engineConfig.environment.sceneBuilder}
                LIGHTING_MANAGER=${engineConfig.environment.lightingManager}
            `;

            fs.writeFileSync('.env', envConfig.trim());
            Logger.info('Created .env file');
        }

        Logger.info('Setup completed successfully');
    } catch (error) {
        Logger.error(`Setup failed: ${error.message}`);
    }
};

setup();
```
