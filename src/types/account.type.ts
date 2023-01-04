import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Account')
export class AccountType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}
