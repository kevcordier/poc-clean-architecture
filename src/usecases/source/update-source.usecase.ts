import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { Source } from '../../domain/model/source';
import { ILogger } from '../../domain/logger/logger.interface';

export class updateSourceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly sourceRepository: SourceRepository,
  ) {}

  async execute(id: string, source: Partial<Source>): Promise<Source> {
    const updated = await this.sourceRepository.update(id, source);
    this.logger.log(
      'updateSourceUsecase execute',
      `Source ${updated.title} has been updated`,
    );

    return updated;
  }
}
