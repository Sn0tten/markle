import { OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
export declare class PgProvider implements OnModuleDestroy {
    private pool;
    constructor();
    getPool(): Pool;
    onModuleDestroy(): Promise<void>;
}
export declare class PgProvider implements OnModuleDestroy {
    private pool;
    constructor();
    getPool(): Pool;
    onModuleDestroy(): Promise<void>;
}
