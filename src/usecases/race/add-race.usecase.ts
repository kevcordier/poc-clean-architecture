import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { Race } from '../../domain/model/race';
import { ILogger } from '../../domain/logger/logger.interface';

export class addRaceUsecase {
  constructor(
    private readonly logger: ILogger,
    private readonly raceRepository: RaceRepository,
  ) {}

  async execute(race: Partial<Race>): Promise<Race> {
    const newRace = await this.raceRepository.insert(race);
    this.logger.log(
      'addRaceUsecase execute',
      `New Race ${race.title} has been added`,
    );

    return newRace;
  }
}
