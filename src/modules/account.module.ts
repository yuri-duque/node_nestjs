import { Module } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { AccountResolver } from '../resolvers/account.resolver';

@Module({
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
