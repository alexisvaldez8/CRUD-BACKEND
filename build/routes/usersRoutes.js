"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.default.index);
        this.router.get('/users', usersController_1.default.getUsers);
        this.router.get('/:usuario/:password', usersController_1.default.login);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
