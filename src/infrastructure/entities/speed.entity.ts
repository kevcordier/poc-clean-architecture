import { Entity, Column, ManyToOne } from 'typeorm';

import { Speed, SpeedType } from '../../domain/model/speed';
import { BaseEntity } from './base.entity';
import { RaceEntity } from './race.entity';

@Entity('speed')
export class SpeedEntity extends BaseEntity implements Speed {
  @Column()
  value: number;

  @Column({
    type: 'enum',
    enum: SpeedType,
    default: SpeedType.WALK,
  })
  type: SpeedType;

  @ManyToOne(() => RaceEntity, (race: RaceEntity) => race.speeds)
  race: RaceEntity;
}
