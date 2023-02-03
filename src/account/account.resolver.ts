import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Account } from 'src/graphql/graphql.schema';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Resolver('Account')
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Query('account')
  async account(@Args('id') id: string) {
    try {
      const account = await this.accountService.getAccount(id);

      return account;
    } catch (error) {
      return error.message;
    }
  }

  @Query('accounts')
  async accounts() {
    try {
      const accounts = await this.accountService.getAccounts();

      return accounts;
    } catch (error) {
      return error.message;
    }
  }

  @Mutation('createAccount')
  async createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountDto,
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
