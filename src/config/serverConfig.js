```javascript
// src/config/serverConfig.js

module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    logDir: process.env.LOG_DIR || 'log',
    appRoot: process.env.APP_ROOT || 'src',
    publicDir: process.env.PUBLIC_DIR || 'public',
    viewDir: process.env.VIEW_DIR || 'views',
    sessionSecret: process.env.SESSION_SECRET || 'your-secret-key',
    sessionMaxAge: process.env.SESSION_MAX_AGE || 24 * 60 * 60 * 1000, // 1 day
};
```
