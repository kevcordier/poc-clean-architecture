import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RaceUsecaseProxyModule } from '../../usecase-proxy/race-usecase-proxy.module';
import { UsecaseProxy } from '../../usecase-proxy/usecase-proxy';
import { getRaceUsecase } from '../../../usecases/race/get-race.usecase';
import { getRacesUsecase } from '../../../usecases/race/get-races.usecase';
import { deleteRaceUsecase } from '../../../usecases/race/delete-race.usecase';
import { updateRaceUsecase } from '../../../usecases/race/update-race.usecase';
import { addRaceUsecase } from '../../../usecases/race/add-race.usecase';
import { RacePresenter } from './race.presenter';
import { ApiResponseType } from '../../common/swagger/response.decorator';

@Controller('race')
@ApiTags('todo')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(RacePresenter)
export class RaceController {
  constructor(
    @Inject(RaceUsecaseProxyModule.GET_RACE_USECASES_PROXY)
    private readonly getRaceUsecaseProxy: UsecaseProxy<getRaceUsecase>,
    @Inject(RaceUsecaseProxyModule.GET_RACES_USECASES_PROXY)
    private readonly getAllRacesUsecaseProxy: UsecaseProxy<getRacesUsecase>,
    @Inject(RaceUsecaseProxyModule.ADD_RACE_USECASES_PROXY)
    private readonly addRaceUsecaseProxy: UsecaseProxy<addRaceUsecase>,
    @Inject(RaceUsecaseProxyModule.UPDATE_RACE_USECASES_PROXY)
    private readonly updateRaceUsecaseProxy: UsecaseProxy<updateRaceUsecase>,
    @Inject(RaceUsecaseProxyModule.DELETE_RACE_USECASES_PROXY)
    private readonly deleteRaceUsecaseProxy: UsecaseProxy<deleteRaceUsecase>,
  ) {}

  @Get('/:id')
  @ApiResponseType(RacePresenter, false)
  async getRace(@Query('id') id: string) {
    const race = await this.getRaceUsecaseProxy.getInstance().execute(id);

    return new RacePresenter(race);
  }

  @Get('/')
  @ApiResponseType(RacePresenter, false)
  async getRacs() {
    const races = await this.getAllRacesUsecaseProxy.getInstance().execute();

    return races.map((race) => new RacePresenter(race));
  }
}
