import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisProvider } from './redis.provider';
import { PgProvider } from './pg.provider';
import { HealthController } from './health.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService, RedisProvider, PgProvider],
})
export class AppModule {}
