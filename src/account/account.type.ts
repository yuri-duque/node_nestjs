import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsEnum, IsString, MinLength } from 'class-validator';

import { IAccount, TypeAccount } from './account.interface';

@ObjectType('Account')
export class AccountType implements IAccount {
  @Field(() => ID)
  id: any;

  @Field()
  name: string;

  @Field()
  type: TypeAccount;

  @Field()
  createDate: string;
}

@InputType()
export class CreateAccountInput {
  @MinLength(1)
  @IsString()
  @Field()
  name: string;

  @IsEnum(TypeAccount, { each: true })
  @Field()
  type: TypeAccount;
}
