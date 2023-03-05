import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { Source } from '../../domain/model/source';

export class getSourcesUsecase {
  constructor(private readonly sourceRepository: SourceRepository) {}

  async execute(): Promise<Source[]> {
    return await this.sourceRepository.findAll();
  }
}
