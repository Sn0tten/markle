import { OnModuleDestroy } from '@nestjs/common';
import { Redis as RedisClient } from 'ioredis';
export declare class RedisProvider implements OnModuleDestroy {
    private client;
    constructor();
    getClient(): RedisClient;
    onModuleDestroy(): Promise<void>;
}
export declare class RedisProvider implements OnModuleDestroy {
    private client;
    constructor();
    getClient(): RedisClient;
    onModuleDestroy(): Promise<void>;
}
