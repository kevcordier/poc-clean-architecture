import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { Race } from '../../domain/model/race';

export class getRacesUsecase {
  constructor(private readonly raceRepository: RaceRepository) {}

  async execute(): Promise<Race[]> {
    return await this.raceRepository.findAll();
  }
}
