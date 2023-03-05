import { DynamicModule, Logger, Module } from '@nestjs/common';

import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { DatabaseSourceRepository } from '../repositories/source.repository';
import { UsecaseProxy } from './usecase-proxy';
import { getSourceUsecase } from '../../usecases/source/get-source.usecase';
import { getSourcesUsecase } from '../../usecases/source/get-sources.usecase';
import { addSourceUsecase } from '../../usecases/source/add-source.usecase';
import { updateSourceUsecase } from '../../usecases/source/update-source.usecase';
import { deleteSourceUsecase } from '../../usecases/source/delete-source.usecase';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class SourceUsecaseProxyModule {
  static GET_SOURCE_USECASES_PROXY = 'getSourceUsecasesProxy';
  static GET_SOURCES_USECASES_PROXY = 'getSourcesUsecasesProxy';
  static ADD_SOURCE_USECASES_PROXY = 'addSourceUsecasesProxy';
  static UPDATE_SOURCE_USECASES_PROXY = 'updateSourceUsecasesProxy';
  static DELETE_SOURCE_USECASES_PROXY = 'deleteSourceUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: SourceUsecaseProxyModule,
      providers: [
        {
          inject: [DatabaseSourceRepository],
          provide: SourceUsecaseProxyModule.GET_SOURCE_USECASES_PROXY,
          useFactory: (sourceRepository: DatabaseSourceRepository) =>
            new UsecaseProxy(new getSourceUsecase(sourceRepository)),
        },
        {
          inject: [DatabaseSourceRepository],
          provide: SourceUsecaseProxyModule.GET_SOURCES_USECASES_PROXY,
          useFactory: (sourceRepository: DatabaseSourceRepository) =>
            new UsecaseProxy(new getSourcesUsecase(sourceRepository)),
        },
        {
          inject: [DatabaseSourceRepository],
          provide: SourceUsecaseProxyModule.ADD_SOURCE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            sourceRepository: DatabaseSourceRepository,
          ) => new UsecaseProxy(new addSourceUsecase(logger, sourceRepository)),
        },
        {
          inject: [DatabaseSourceRepository],
          provide: SourceUsecaseProxyModule.UPDATE_SOURCE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            sourceRepository: DatabaseSourceRepository,
          ) =>
            new UsecaseProxy(new updateSourceUsecase(logger, sourceRepository)),
        },
        {
          inject: [DatabaseSourceRepository],
          provide: SourceUsecaseProxyModule.DELETE_SOURCE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            sourceRepository: DatabaseSourceRepository,
          ) =>
            new UsecaseProxy(new deleteSourceUsecase(logger, sourceRepository)),
        },
      ],
      exports: [
        SourceUsecaseProxyModule.GET_SOURCE_USECASES_PROXY,
        SourceUsecaseProxyModule.GET_SOURCES_USECASES_PROXY,
        SourceUsecaseProxyModule.ADD_SOURCE_USECASES_PROXY,
        SourceUsecaseProxyModule.UPDATE_SOURCE_USECASES_PROXY,
        SourceUsecaseProxyModule.DELETE_SOURCE_USECASES_PROXY,
      ],
    };
  }
}
