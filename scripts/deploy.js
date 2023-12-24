```javascript
// scripts/deploy.js

const { exec } = require('child_process');
const serverConfig = require('../src/config/serverConfig');
const logger = require('../src/utils/logger');

// Function to execute shell commands
const execShellCommand = cmd => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                logger.error(`Error: ${error.message}`);
                reject(error);
            }
            if (stderr) {
                logger.error(`Error: ${stderr}`);
                reject(new Error(stderr));
            }
            logger.info(stdout);
            resolve(stdout);
        });
    });
};

// Deployment script
const deploy = async () => {
    try {
        logger.info('Deployment started...');
        
        // Install dependencies
        logger.info('Installing dependencies...');
        await execShellCommand('npm install');
        
        // Build the project
        logger.info('Building the project...');
        await execShellCommand('npm run build');
        
        // Start the server
        logger.info('Starting the server...');
        await execShellCommand(`node ${serverConfig.appRoot}/app.js`);
        
        logger.info('Deployment successful!');
    } catch (error) {
        logger.error(`Deployment failed: ${error.message}`);
    }
};

deploy();
```
