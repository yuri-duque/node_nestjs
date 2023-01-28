import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateAccountInput {
  @MinLength(1)
  @IsString()
  @Field()
  name: string;
}
