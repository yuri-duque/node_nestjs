import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountEntity } from './account.endity';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
