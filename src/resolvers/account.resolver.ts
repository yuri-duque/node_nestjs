import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from 'src/services/account.service';
import { AccountType } from 'src/types/account.type';
import { CreateAccountInput } from './account.input';

@Resolver(() => AccountType)
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Query(() => AccountType)
  async account(@Args('id') id: string) {
    try {
      const account = await this.accountService.getAccount(id);

      return account;
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => AccountType)
  async createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
  ) {
    try {
      const { name } = createAccountInput;

      const account = await this.accountService.createAccount(name);

      return account;
    } catch (error) {
      return error.message;
    }
  }
}
