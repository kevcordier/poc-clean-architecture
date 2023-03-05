import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SourceRepository } from '../../domain/repositories/source-repository.interface';
import { SourceEntity } from '../entities/source.entity';
import { Source } from '../../domain/model/source';

@Injectable()
export class DatabaseSourceRepository implements SourceRepository {
  constructor(
    @InjectRepository(SourceEntity)
    private readonly sourceEntityRepository: Repository<SourceEntity>,
  ) {}

  async insert(source: Source): Promise<Source> {
    const sourceEntity = this.sourceEntityRepository.create(source);

    const { identifiers } = await this.sourceEntityRepository.insert(
      sourceEntity,
    );

    return this.findById(identifiers['id']);
  }

  async findAll(): Promise<Source[]> {
    return this.sourceEntityRepository.createQueryBuilder('source').getMany();
  }

  findById(id: string): Promise<Source> {
    return this.sourceEntityRepository
      .createQueryBuilder('source')
      .where('source.id = :id', { id })
      .getOne();
  }

  async update(id: string, source: Partial<Source>): Promise<Source> {
    await this.sourceEntityRepository.update(id, source);

    return this.findById(id);
  }

  async deleteById(id: string): Promise<Source> {
    const source = await this.findById(id);
    await this.sourceEntityRepository.delete(id);

    return source;
  }
}
