import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Race } from '../../domain/model/race';
import { Size } from '../../domain/model/creature';
import { SourceEntity } from './source.entity';
import { SpeedEntity } from './speed.entity';
import { Content } from '../../domain/model/content';

@Entity('race')
export class RaceEntity extends BaseEntity implements Content, Race {
  @ManyToOne(() => SourceEntity)
  source: SourceEntity;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Size,
    default: Size.MEDIUM,
  })
  size: Size;

  @OneToMany(() => SpeedEntity, (speed: SpeedEntity) => speed.race, {
    cascade: true,
  })
  speeds: SpeedEntity[];
}
