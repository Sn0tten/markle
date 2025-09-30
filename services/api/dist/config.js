"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = loadConfig;
function loadConfig() {
    return {
        pg: {
            host: process.env.PG_HOST || localhost,
            port: Number(process.env.PG_PORT || 5432),
            database: process.env.PG_DATABASE || markle,
            user: process.env.PG_USER || markle,
            password: process.env.PG_PASSWORD || markle,
        },
        redis: {
            host: process.env.REDIS_HOST || localhost,
            port: Number(process.env.REDIS_PORT || 6379),
        },
    };
}
//# sourceMappingURL=config.js.map