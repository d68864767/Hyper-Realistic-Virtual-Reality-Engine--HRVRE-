```javascript
const UserService = require('../../services/userService');
const Logger = require('../../utils/logger');

// UserController handles all user-related API requests
class UserController {
    constructor() {
        this.userService = new UserService();
    }

    // Register a new user
    async register(req, res, next) {
        try {
            const user = await this.userService.register(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    user,
                },
            });
        } catch (err) {
            Logger.error(`Error in UserController.register: ${err.message}`);
            next(err);
        }
    }

    // Login a user
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const token = await this.userService.login(email, password);
            res.status(200).json({
                status: 'success',
                data: {
                    token,
                },
            });
        } catch (err) {
            Logger.error(`Error in UserController.login: ${err.message}`);
            next(err);
        }
    }

    // Get user profile
    async getProfile(req, res, next) {
        try {
            const user = await this.userService.getProfile(req.user.id);
            res.status(200).json({
                status: 'success',
                data: {
                    user,
                },
            });
        } catch (err) {
            Logger.error(`Error in UserController.getProfile: ${err.message}`);
            next(err);
        }
    }

    // Update user profile
    async updateProfile(req, res, next) {
        try {
            const user = await this.userService.updateProfile(req.user.id, req.body);
            res.status(200).json({
                status: 'success',
                data: {
                    user,
                },
            });
        } catch (err) {
            Logger.error(`Error in UserController.updateProfile: ${err.message}`);
            next(err);
        }
    }
}

module.exports = UserController;
```
