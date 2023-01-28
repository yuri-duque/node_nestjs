import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from 'src/services/account.service';
import { AccountType } from 'src/types/account.type';

@Resolver((of) => AccountType)
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Query((returns) => AccountType)
  async account(@Args('id') id: string) {
    try {
      const account = await this.accountService.getAccount(id);

      if (!account) {
        return 'Account not found!';
      }

      return account;
    } catch (error) {
      return error.message;
    }
  }

  @Mutation((returns) => AccountType)
  async createAccount(@Args('name') name: string) {
    try {
      const account = await this.accountService.createAccount(name);

      return account;
    } catch (error) {
      return error.message;
    }
  }
}
