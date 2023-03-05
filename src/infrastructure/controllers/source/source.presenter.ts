import { ApiProperty } from '@nestjs/swagger';
import { Source } from '../../../domain/model/source';

export class SourcePresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  constructor(source: Source) {
    this.id = source.id;
    this.title = source.title;
    this.createdAt = source.createdAt;
    this.updatedAt = source.updatedAt;
  }
}
