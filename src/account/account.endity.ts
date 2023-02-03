import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

import { Account } from 'src/graphql/graphql.schema';

@Entity()
export class AccountEntity implements Account {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createDate: string;
}
