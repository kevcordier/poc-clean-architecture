import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { Race } from '../../domain/model/race';
import { ILogger } from '../../domain/logger/logger.interface';

export class deleteRaceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly raceRepository: RaceRepository,
  ) {}

  async execute(id: string): Promise<Race> {
    const deleted = await this.raceRepository.deleteById(id);
    this.logger.log(
      'deleteRaceUsecase execute',
      `Race ${deleted.title} has been deleted`,
    );

    return deleted;
  }
}
