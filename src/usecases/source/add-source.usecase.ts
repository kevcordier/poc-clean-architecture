import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { Source } from '../../domain/model/source';
import { ILogger } from '../../domain/logger/logger.interface';

export class addSourceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly sourceRepository: SourceRepository,
  ) {}

  async execute(source: Partial<Source>): Promise<Source> {
    const newSource = await this.sourceRepository.insert(source);
    this.logger.log(
      'addSourceUsecase execute',
      `New Source ${source.title} has been added`,
    );

    return newSource;
  }
}
