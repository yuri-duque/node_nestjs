import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from 'src/entities/account.endity';
import { AccountResolver } from 'src/resolvers/account.resolver';
import { AccountService } from 'src/services/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
