import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis, { Redis as RedisClient } from 'ioredis';

@Injectable()
export class RedisProvider implements OnModuleDestroy {
  private client: RedisClient;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT || 6379),
    });
  }

  getClient(): RedisClient {
    return this.client;
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit();
  }
}

import { Injectable, OnModuleDestroy } from @nestjs/common;
import Redis, { Redis as RedisClient } from ioredis;
import { loadConfig } from ./config;

@Injectable()
export class RedisProvider implements OnModuleDestroy {
  private client: RedisClient;

  constructor() {
    const cfg = loadConfig().redis;
    this.client = new Redis({ host: cfg.host, port: cfg.port });
  }

  getClient(): RedisClient {
    return this.client;
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit();
  }
}
