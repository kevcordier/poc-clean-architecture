import { Entity, Column } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Source, SourceType } from '../../domain/model/source';

@Entity('source')
export class SourceEntity extends BaseEntity implements Source {
  @Column({
    type: 'enum',
    enum: SourceType,
  })
  type: SourceType;

  @Column()
  publishedAt: Date;
}
