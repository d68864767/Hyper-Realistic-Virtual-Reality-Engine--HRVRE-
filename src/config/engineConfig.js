```javascript
// src/config/engineConfig.js

module.exports = {
    graphics: {
        renderer: process.env.RENDERER || 'WebGL',
        textureQuality: process.env.TEXTURE_QUALITY || 'high',
    },
    physics: {
        engine: process.env.PHYSICS_ENGINE || 'Bullet',
        gravity: process.env.GRAVITY || -9.8,
    },
    ai: {
        npcBehavior: process.env.NPC_BEHAVIOR || 'advanced',
        interactiveElements: process.env.INTERACTIVE_ELEMENTS || 'enabled',
    },
    environment: {
        sceneBuilder: process.env.SCENE_BUILDER || 'custom',
        lightingManager: process.env.LIGHTING_MANAGER || 'dynamic',
    },
};
```
