import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { Race } from '../../domain/model/race';

export class getRaceUsecase {
  constructor(private readonly raceRepository: RaceRepository) {}

  async execute(id: string): Promise<Race> {
    return await this.raceRepository.findById(id);
  }
}
