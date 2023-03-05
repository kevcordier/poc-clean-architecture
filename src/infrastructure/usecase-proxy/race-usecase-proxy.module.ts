import { DynamicModule, Logger, Module } from '@nestjs/common';

import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { DatabaseRaceRepository } from '../repositories/race.repository';
import { UsecaseProxy } from './usecase-proxy';
import { getRaceUsecase } from '../../usecases/race/get-race.usecase';
import { getRacesUsecase } from '../../usecases/race/get-races.usecase';
import { addRaceUsecase } from '../../usecases/race/add-race.usecase';
import { updateRaceUsecase } from '../../usecases/race/update-race.usecase';
import { deleteRaceUsecase } from '../../usecases/race/delete-race.usecase';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class RaceUsecaseProxyModule {
  static GET_RACE_USECASES_PROXY = 'getRaceUsecasesProxy';
  static GET_RACES_USECASES_PROXY = 'getRacesUsecasesProxy';
  static ADD_RACE_USECASES_PROXY = 'addRaceUsecasesProxy';
  static UPDATE_RACE_USECASES_PROXY = 'updateRaceUsecasesProxy';
  static DELETE_RACE_USECASES_PROXY = 'deleteRaceUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: RaceUsecaseProxyModule,
      providers: [
        {
          inject: [DatabaseRaceRepository],
          provide: RaceUsecaseProxyModule.GET_RACE_USECASES_PROXY,
          useFactory: (raceRepository: DatabaseRaceRepository) =>
            new UsecaseProxy(new getRaceUsecase(raceRepository)),
        },
        {
          inject: [DatabaseRaceRepository],
          provide: RaceUsecaseProxyModule.GET_RACES_USECASES_PROXY,
          useFactory: (raceRepository: DatabaseRaceRepository) =>
            new UsecaseProxy(new getRacesUsecase(raceRepository)),
        },
        {
          inject: [DatabaseRaceRepository],
          provide: RaceUsecaseProxyModule.ADD_RACE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            raceRepository: DatabaseRaceRepository,
          ) => new UsecaseProxy(new addRaceUsecase(logger, raceRepository)),
        },
        {
          inject: [DatabaseRaceRepository],
          provide: RaceUsecaseProxyModule.UPDATE_RACE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            raceRepository: DatabaseRaceRepository,
          ) => new UsecaseProxy(new updateRaceUsecase(logger, raceRepository)),
        },
        {
          inject: [DatabaseRaceRepository],
          provide: RaceUsecaseProxyModule.DELETE_RACE_USECASES_PROXY,
          useFactory: (
            logger: Logger,
            raceRepository: DatabaseRaceRepository,
          ) => new UsecaseProxy(new deleteRaceUsecase(logger, raceRepository)),
        },
      ],
      exports: [
        RaceUsecaseProxyModule.GET_RACE_USECASES_PROXY,
        RaceUsecaseProxyModule.GET_RACES_USECASES_PROXY,
        RaceUsecaseProxyModule.ADD_RACE_USECASES_PROXY,
        RaceUsecaseProxyModule.UPDATE_RACE_USECASES_PROXY,
        RaceUsecaseProxyModule.DELETE_RACE_USECASES_PROXY,
      ],
    };
  }
}
