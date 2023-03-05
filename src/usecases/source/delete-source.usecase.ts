import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { Source } from '../../domain/model/source';
import { ILogger } from '../../domain/logger/logger.interface';

export class deleteSourceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly sourceRepository: SourceRepository,
  ) {}

  async execute(id: string): Promise<Source> {
    const deleted = await this.sourceRepository.deleteById(id);
    this.logger.log(
      'deleteSourceUsecase execute',
      `Source ${deleted.title} has been deleted`,
    );

    return deleted;
  }
}
