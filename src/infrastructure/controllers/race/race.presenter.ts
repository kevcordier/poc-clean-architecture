import { ApiProperty } from '@nestjs/swagger';
import { Race } from '../../../domain/model/race';

export class RacePresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  isDone: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(race: Race) {
    this.id = race.id;
    this.title = race.title;
    this.createdAt = race.createdAt;
    this.updatedAt = race.updatedAt;
  }
}
