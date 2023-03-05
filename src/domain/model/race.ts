import { Content } from './content';
import { Creature, Size } from './creature';
import { Entity } from './entity';
import { Source } from './source';
import { Speed } from './speed';

export class Race extends Entity implements Creature, Content {
  source: Source;
  description: string;
  speeds: Speed[];
  size: Size;
}
