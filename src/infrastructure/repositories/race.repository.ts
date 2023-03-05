import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RaceRepository } from '../../domain/repositories/race-repository.interface';
import { RaceEntity } from '../entities/race.entity';
import { Race } from '../../domain/model/race';

@Injectable()
export class DatabaseRaceRepository implements RaceRepository {
  constructor(
    @InjectRepository(RaceEntity)
    private readonly raceEntityRepository: Repository<RaceEntity>,
  ) {}

  async insert(race: Race): Promise<Race> {
    const raceEntity = this.raceEntityRepository.create(race);

    const { identifiers } = await this.raceEntityRepository.insert(raceEntity);

    return this.findById(identifiers['id']);
  }

  async findAll(): Promise<Race[]> {
    return this.raceEntityRepository.createQueryBuilder('race').getMany();
  }

  findById(id: string): Promise<Race> {
    return this.raceEntityRepository
      .createQueryBuilder('race')
      .where('race.id = :id', { id })
      .getOne();
  }

  async update(id: string, race: Partial<Race>): Promise<Race> {
    await this.raceEntityRepository.update(id, race);

    return this.findById(id);
  }

  async deleteById(id: string): Promise<Race> {
    const race = await this.findById(id);
    await this.raceEntityRepository.delete(id);

    return race;
  }
}
