import {
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SourceUsecaseProxyModule } from '../../usecase-proxy/source-usecase-proxy.module';
import { UsecaseProxy } from '../../usecase-proxy/usecase-proxy';
import { getSourceUsecase } from '../../../usecases/source/get-source.usecase';
import { getSourcesUsecase } from '../../../usecases/source/get-sources.usecase';
import { deleteSourceUsecase } from '../../../usecases/source/delete-source.usecase';
import { updateSourceUsecase } from '../../../usecases/source/update-source.usecase';
import { addSourceUsecase } from '../../../usecases/source/add-source.usecase';
import { SourcePresenter } from './source.presenter';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { AddSourceDto, UpdateSourceDto } from './source.dto';

@Controller('source')
@ApiTags('source')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(SourcePresenter)
export class SourceController {
  constructor(
    @Inject(SourceUsecaseProxyModule.GET_SOURCE_USECASES_PROXY)
    private readonly getSourceUsecaseProxy: UsecaseProxy<getSourceUsecase>,
    @Inject(SourceUsecaseProxyModule.GET_SOURCES_USECASES_PROXY)
    private readonly getAllSourcesUsecaseProxy: UsecaseProxy<getSourcesUsecase>,
    @Inject(SourceUsecaseProxyModule.ADD_SOURCE_USECASES_PROXY)
    private readonly addSourceUsecaseProxy: UsecaseProxy<addSourceUsecase>,
    @Inject(SourceUsecaseProxyModule.UPDATE_SOURCE_USECASES_PROXY)
    private readonly updateSourceUsecaseProxy: UsecaseProxy<updateSourceUsecase>,
    @Inject(SourceUsecaseProxyModule.DELETE_SOURCE_USECASES_PROXY)
    private readonly deleteSourceUsecaseProxy: UsecaseProxy<deleteSourceUsecase>,
  ) {}

  @Get('/:id')
  @ApiResponseType(SourcePresenter, false)
  async getSource(@Query('id') id: string) {
    const source = await this.getSourceUsecaseProxy.getInstance().execute(id);

    return new SourcePresenter(source);
  }

  @Get('/')
  @ApiResponseType(SourcePresenter, true)
  async getSources() {
    const sources = await this.getAllSourcesUsecaseProxy
      .getInstance()
      .execute();

    return sources.map((source) => new SourcePresenter(source));
  }

  @Post('/')
  @ApiResponseType(SourcePresenter, true)
  async insertSource(@Query('body') source: AddSourceDto) {
    const newSource = await this.addSourceUsecaseProxy
      .getInstance()
      .execute(source);

    return new SourcePresenter(newSource);
  }

  @Put('/:id')
  @ApiResponseType(SourcePresenter, true)
  async updateSource(
    @Query('id') id: string,
    @Query('body') source: UpdateSourceDto,
  ) {
    const updatedSource = await this.updateSourceUsecaseProxy
      .getInstance()
      .execute(id, source);

    return new SourcePresenter(updatedSource);
  }

  @Delete('/:id')
  @ApiResponseType(SourcePresenter, true)
  async deleteSource(@Query('id') id: string) {
    const deletedSource = await this.deleteSourceUsecaseProxy
      .getInstance()
      .execute(id);

    return new SourcePresenter(deletedSource);
  }
}
