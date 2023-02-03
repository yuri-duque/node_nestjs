import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';
import { Account } from 'src/graphql/graphql.schema';

@InputType()
export class CreateAccountDto implements Account {
  @MinLength(1)
  @IsString()
  @Field()
  name: string;
}
