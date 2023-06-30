"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulesRoutes = void 0;
const express_1 = require("express");
const schedules_controllers_1 = require("../controllers/schedules.controllers");
const schedules_controllers_2 = require("../controllers/schedules.controllers");
const ensureTokenIsValid_1 = require("../middlewares/ensureTokenIsValid");
const ensureIsAdmin_1 = require("../middlewares/ensureIsAdmin");
const ensureBodyIsValid_1 = require("../middlewares/ensureBodyIsValid");
const schedules_1 = require("../schemas/schedules");
exports.schedulesRoutes = (0, express_1.Router)();
exports.schedulesRoutes.post('', ensureTokenIsValid_1.ensureTokenIsValidMiddleware, (0, ensureBodyIsValid_1.ensureBodyIsValidMiddleware)(schedules_1.scheduleSchemaRequest), schedules_controllers_1.createSchedulesController);
exports.schedulesRoutes.get('/realEstate/:id', ensureTokenIsValid_1.ensureTokenIsValidMiddleware, ensureIsAdmin_1.ensureIsAdminMiddleware, schedules_controllers_2.listSchedulesController);
