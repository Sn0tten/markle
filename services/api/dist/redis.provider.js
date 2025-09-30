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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisProvider = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisProvider = class RedisProvider {
    client;
    constructor() {
        this.client = new ioredis_1.default({
            host: process.env.REDIS_HOST || 'localhost',
            port: Number(process.env.REDIS_PORT || 6379),
        });
    }
    getClient() {
        return this.client;
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
};
exports.RedisProvider = RedisProvider;
exports.RedisProvider = RedisProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisProvider);
const module_1 = require();
let RedisProvider = class RedisProvider {
    client;
    constructor() {
        const cfg = (0, module_1.loadConfig)().redis;
        this.client = new ioredis_1.default({ host: cfg.host, port: cfg.port });
    }
    getClient() {
        return this.client;
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
};
exports.RedisProvider = RedisProvider;
exports.RedisProvider = RedisProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisProvider);
//# sourceMappingURL=redis.provider.js.map