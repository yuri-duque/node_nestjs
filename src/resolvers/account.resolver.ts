import { Query, Resolver } from '@nestjs/graphql';
import { AccountType } from 'src/types/account.type';

@Resolver((of) => AccountType)
export class AccountResolver {
  @Query((returns) => AccountType)
  account() {
    return {
      id: '123',
      name: 'test',
    };
  }
}
