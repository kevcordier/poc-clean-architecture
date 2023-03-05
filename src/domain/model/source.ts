import { Entity } from './entity';

export enum SourceType {
  CORE = 'core',
  SUPPLEMENTS = 'supplements',
  SETTINGS = 'settings',
  EXTRA = 'extra',
  ADVENTURE = 'adventure',
}

export class Source extends Entity {
  type: SourceType;
  publishedAt: Date;
}
