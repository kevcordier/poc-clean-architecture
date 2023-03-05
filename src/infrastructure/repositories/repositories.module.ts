import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { RaceEntity } from '../entities/race.entity';
import { DatabaseRaceRepository } from './race.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([RaceEntity])],
  providers: [DatabaseRaceRepository],
  exports: [DatabaseRaceRepository],
})
export class RepositoriesModule {}
