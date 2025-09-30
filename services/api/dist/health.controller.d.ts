import { RedisProvider } from './redis.provider';
import { PgProvider } from './pg.provider';
export declare class HealthController {
    private readonly redisProvider;
    private readonly pgProvider;
    constructor(redisProvider: RedisProvider, pgProvider: PgProvider);
    check(): Promise<{
        redis: "up" | "down" | "unknown";
        postgres: "up" | "down" | "unknown";
        ok: boolean;
    }>;
}
export declare class HealthController {
    private readonly redisProvider;
    private readonly pgProvider;
    constructor(redisProvider: RedisProvider, pgProvider: PgProvider);
    check(): Promise<void>;
}
