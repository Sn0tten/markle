"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgProvider = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let PgProvider = class PgProvider {
    pool;
    constructor() {
        this.pool = new pg_1.Pool({
            host: process.env.PG_HOST || 'localhost',
            port: Number(process.env.PG_PORT || 5432),
            database: process.env.PG_DATABASE || 'markle',
            user: process.env.PG_USER || 'markle',
            password: process.env.PG_PASSWORD || 'markle',
        });
    }
    getPool() {
        return this.pool;
    }
    async onModuleDestroy() {
        await this.pool.end();
    }
};
exports.PgProvider = PgProvider;
exports.PgProvider = PgProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PgProvider);
const module_1 = require();
let PgProvider = class PgProvider {
    pool;
    constructor() {
        const cfg = (0, module_1.loadConfig)().pg;
        this.pool = new pg_1.Pool({
            host: cfg.host,
            port: cfg.port,
            database: cfg.database,
            user: cfg.user,
            password: cfg.password,
        });
    }
    getPool() {
        return this.pool;
    }
    async onModuleDestroy() {
        await this.pool.end();
    }
};
exports.PgProvider = PgProvider;
exports.PgProvider = PgProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PgProvider);
//# sourceMappingURL=pg.provider.js.map