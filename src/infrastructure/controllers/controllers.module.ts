import { Module } from '@nestjs/common';

import { RaceUsecaseProxyModule } from '../usecase-proxy/race-usecase-proxy.module';
import { RaceController } from './race/race.controller';
import { SourceController } from './source/source.controller';
import { SourceUsecaseProxyModule } from '../usecase-proxy/source-usecase-proxy.module';

@Module({
  imports: [
    RaceUsecaseProxyModule.register(),
    SourceUsecaseProxyModule.register(),
  ],
  controllers: [RaceController, SourceController],
})
export class ControllersModule {}
