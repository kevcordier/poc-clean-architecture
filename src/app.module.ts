import { Module } from '@nestjs/common';

import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { RaceUsecaseProxyModule } from './infrastructure/usecase-proxy/race-usecase-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { SourceUsecaseProxyModule } from './infrastructure/usecase-proxy/source-usecase-proxy.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    ExceptionsModule,
    RepositoriesModule,
    //LoggerModule,
    ControllersModule,
    RaceUsecaseProxyModule.register(),
    SourceUsecaseProxyModule.register(),
  ],
})
export class AppModule {}
