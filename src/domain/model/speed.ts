import { Entity } from './entity';

export enum SpeedType {
  WALK = 'walk',
  FLY = 'fly',
  SWIM = 'swim',
  BURROW = 'burrow',
  CLIMB = 'climb',
  HOVER = 'hover',
}

export class Speed extends Entity {
  type: SpeedType;
  value: number;
}
