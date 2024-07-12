"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const survey_entity_1 = require("./survey.entity");
const user_entity_1 = require("./user.entity");
const users_module_1 = require("./users/users.module");
const surveys_module_1 = require("./surveys/surveys.module");
const auth_module_1 = require("./auth/auth.module");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'mysql-231391b9-dinhit1801-3fbc.g.aivencloud.com',
                port: 22590,
                username: 'avnadmin',
                password: 'AVNS_I2gPfzsT4nLoIGwTAHV',
                database: 'defaultdb',
                entities: [user_entity_1.User, survey_entity_1.Survey],
                synchronize: true,
            }), users_module_1.UsersModule, surveys_module_1.SurveysModule, auth_module_1.AuthModule,],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map