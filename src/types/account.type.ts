import { Field, ID, ObjectType } from '@nestjs/graphql';

import { IAccount } from 'src/interfaces/account.interface';

@ObjectType('Account')
export class AccountType implements IAccount {
  @Field(() => ID)
  id: any;

  @Field()
  name: string;

  @Field()
  createDate: string;
}
