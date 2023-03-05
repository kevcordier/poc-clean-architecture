import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Entity } from '../../domain/model/entity';

export class BaseEntity implements Entity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 255, nullable: false })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
