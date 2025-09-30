import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PgProvider implements OnModuleDestroy {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.PG_HOST || 'localhost',
      port: Number(process.env.PG_PORT || 5432),
      database: process.env.PG_DATABASE || 'markle',
      user: process.env.PG_USER || 'markle',
      password: process.env.PG_PASSWORD || 'markle',
    });
  }

  getPool(): Pool {
    return this.pool;
  }

  async onModuleDestroy(): Promise<void> {
    await this.pool.end();
  }
}

import { Injectable, OnModuleDestroy } from @nestjs/common;
import { Pool } from pg;
import { loadConfig } from ./config;

@Injectable()
export class PgProvider implements OnModuleDestroy {
  private pool: Pool;

  constructor() {
    const cfg = loadConfig().pg;
    this.pool = new Pool({
      host: cfg.host,
      port: cfg.port,
      database: cfg.database,
      user: cfg.user,
      password: cfg.password,
    });
  }

  getPool(): Pool {
    return this.pool;
  }

  async onModuleDestroy(): Promise<void> {
    await this.pool.end();
  }
}
