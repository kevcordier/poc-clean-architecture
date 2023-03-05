import { Source } from '../model/source';

export interface SourceRepository {
  insert(source: Partial<Source>): Promise<Source>;
  findAll(): Promise<Source[]>;
  findById(id: string): Promise<Source>;
  update(id: string, source: Partial<Source>): Promise<Source>;
  deleteById(id: string): Promise<Source>;
}
