import { Module } from '@nestjs/common';
import { AccountResolver } from 'src/resolvers/account.resolver';

@Module({ providers: [AccountResolver] })
export class AccountModule {}
