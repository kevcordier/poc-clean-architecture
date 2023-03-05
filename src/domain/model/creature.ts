import { Speed } from './speed';

export enum Size {
  TINY = 'tiny',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
  GARGANTUAN = 'gargantuan',
}

export interface Creature {
  size: Size;
  speeds: Speed[];
}
