import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { Source } from '../../domain/model/source';

export class getSourceUsecase {
  constructor(private readonly sourceRepository: SourceRepository) {}

  async execute(id: string): Promise<Source> {
    return await this.sourceRepository.findById(id);
  }
}
