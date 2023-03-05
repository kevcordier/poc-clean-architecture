import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { Race } from '../../domain/model/race';
import { ILogger } from '../../domain/logger/logger.interface';

export class updateRaceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly raceRepository: RaceRepository,
  ) {}

  async execute(id: string, race: Partial<Race>): Promise<Race> {
    const updated = await this.raceRepository.update(id, race);
    this.logger.log(
      'updateRaceUsecase execute',
      `Race ${updated.title} has been updated`,
    );

    return updated;
  }
}
