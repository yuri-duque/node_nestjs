import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

import { IAccount } from 'src/interfaces/account.interface';

@Entity()
export class Account implements IAccount {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createDate: string;
}
