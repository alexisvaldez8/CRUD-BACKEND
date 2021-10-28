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
        this.router.get('/accounts', usersController_1.default.getAccounts);
        this.router.get('/changes', usersController_1.default.getChanges);
        this.router.get('/:email/:password', usersController_1.default.login);
        this.router.get('/users-detail', usersController_1.default.getUsersDetail);
        this.router.post('/users-detail-register', usersController_1.default.saveUser);
        this.router.post('/accounts-register', usersController_1.default.saveAccount);
        this.router.post('/changes-register', usersController_1.default.newChange);
        this.router.delete('/:idUser', usersController_1.default.deleteUser);
        this.router.delete('/accounts/:idAccount', usersController_1.default.deleteAccount);
        this.router.delete('/changes/:idChanges', usersController_1.default.deleteChange);
        this.router.get('/changes/filter/:id', usersController_1.default.filterByid);
        this.router.get('/changes/filter-email/:email', usersController_1.default.filterByEmail);
        this.router.get('/changes/filter-computer/:computer', usersController_1.default.filterByComputer);
        this.router.get('/changes/filter-date-start/:dateStart', usersController_1.default.filterByDateStart);
        this.router.get('/changes/filter-date-end/:dateEnd', usersController_1.default.filterByDateEnd);
        this.router.put('/changes/update/:id', usersController_1.default.updateChange);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
