import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { RaceEntity } from '../entities/race.entity';
import { DatabaseRaceRepository } from './race.repository';
import { DatabaseSourceRepository } from './source.repository';
import { SourceEntity } from '../entities/source.entity';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([RaceEntity, SourceEntity]),
  ],
  providers: [DatabaseRaceRepository, DatabaseSourceRepository],
  exports: [DatabaseRaceRepository, DatabaseSourceRepository],
})
export class RepositoriesModule {}
