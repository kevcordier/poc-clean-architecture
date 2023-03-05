import { Race } from '../model/race';

export interface RaceRepository {
  insert(race: Partial<Race>): Promise<Race>;
  findAll(): Promise<Race[]>;
  findById(id: string): Promise<Race>;
  update(id: string, race: Partial<Race>): Promise<Race>;
  deleteById(id: string): Promise<Race>;
}
