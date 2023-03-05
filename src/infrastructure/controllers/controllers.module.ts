import { Module } from '@nestjs/common';

import { RaceUsecaseProxyModule } from '../usecase-proxy/race-usecase-proxy.module';
import { RaceController } from './race/race.controller';

@Module({
  imports: [RaceUsecaseProxyModule.register()],
  controllers: [RaceController],
})
export class ControllersModule {}
