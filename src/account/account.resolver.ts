import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { AccountType } from './account.type';
import { CreateAccountDto } from './dto/account.dto';

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

  @Query(() => [AccountType])
  async accounts() {
    try {
      const accounts = await this.accountService.getAccounts();

      return accounts;
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => AccountType)
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
