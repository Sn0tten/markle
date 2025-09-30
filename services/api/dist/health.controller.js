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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const redis_provider_1 = require("./redis.provider");
const pg_provider_1 = require("./pg.provider");
let HealthController = class HealthController {
    redisProvider;
    pgProvider;
    constructor(redisProvider, pgProvider) {
        this.redisProvider = redisProvider;
        this.pgProvider = pgProvider;
    }
    async check() {
        const status = { redis: 'unknown', postgres: 'unknown', ok: false };
        try {
            const pong = await this.redisProvider.getClient().ping();
            status.redis = pong === 'PONG' ? 'up' : 'down';
        }
        catch {
            status.redis = 'down';
        }
        try {
            const res = await this.pgProvider.getPool().query('SELECT 1 as ok');
            status.postgres = res.rows?.[0]?.ok === 1 ? 'up' : 'down';
        }
        catch {
            status.postgres = 'down';
        }
        status.ok = status.redis === 'up' && status.postgres === 'up';
        return status;
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [redis_provider_1.RedisProvider,
        pg_provider_1.PgProvider])
], HealthController);
let HealthController = class HealthController {
    redisProvider;
    pgProvider;
    constructor(redisProvider, pgProvider) {
        this.redisProvider = redisProvider;
        this.pgProvider = pgProvider;
    }
    async check() {
        const status = { redis: unknown, postgres: unknown, ok: false };
        try {
            const pong = await this.redisProvider.getClient().ping();
            status.redis = pong === PONG ? up : down;
        }
        catch {
            status.redis = down;
        }
        try {
            const res = await this.pgProvider.getPool().query(SELECT);
        }
        finally {
        }
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)(health),
    __metadata("design:paramtypes", [redis_provider_1.RedisProvider,
        pg_provider_1.PgProvider])
], HealthController);
//# sourceMappingURL=health.controller.js.map