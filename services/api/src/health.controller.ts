import { Controller, Get } from '@nestjs/common';
import { RedisProvider } from './redis.provider';
import { PgProvider } from './pg.provider';

@Controller('health')
export class HealthController {
  constructor(
    private readonly redisProvider: RedisProvider,
    private readonly pgProvider: PgProvider,
  ) {}

  @Get()
  async check() {
    const status = { redis: 'unknown', postgres: 'unknown', ok: false } as {
      redis: 'up' | 'down' | 'unknown';
      postgres: 'up' | 'down' | 'unknown';
      ok: boolean;
    };

    try {
      const pong = await this.redisProvider.getClient().ping();
      status.redis = pong === 'PONG' ? 'up' : 'down';
    } catch {
      status.redis = 'down';
    }

    try {
      const res = await this.pgProvider.getPool().query('SELECT 1 as ok');
      status.postgres = res.rows?.[0]?.ok === 1 ? 'up' : 'down';
    } catch {
      status.postgres = 'down';
    }

    status.ok = status.redis === 'up' && status.postgres === 'up';
    return status;
  }
}

import { Controller, Get } from @nestjs/common;
import { RedisProvider } from ./redis.provider;
import { PgProvider } from ./pg.provider;

@Controller(health)
export class HealthController {
  constructor(
    private readonly redisProvider: RedisProvider,
    private readonly pgProvider: PgProvider,
  ) {}

  @Get()
  async check() {
    const status = { redis: unknown, postgres: unknown, ok: false } as {
      redis: up | down | unknown;
      postgres: up | down | unknown;
      ok: boolean;
    };

    try {
      const pong = await this.redisProvider.getClient().ping();
      status.redis = pong === PONG ? up : down;
    } catch {
      status.redis = down;
    }

    try {
      const res = await this.pgProvider.getPool().query(SELECT
