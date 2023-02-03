import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

import { IAccount } from './account.interface';

@Entity()
export class AccountEntity implements IAccount {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createDate: string;
}
