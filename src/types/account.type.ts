import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IAccount } from 'src/interfaces/account.interface';
import { ObjectID } from 'typeorm';

@ObjectType('Account')
export class AccountType implements IAccount {
  @Field((type) => ID)
  id: any;

  @Field()
  name: string;

  @Field()
  createDate: string;
}
