import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { generateId, generateIsoDate } from 'src/utils/mongo.utils';
import { Account } from 'src/graphql/graphql.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  getAccount(id: string) {
    return this.accountRepository.findOne({
      where: { id: id },
    });
  }

  getAccounts() {
    return this.accountRepository.find();
  }

  createAccount(name: string) {
    const account = this.accountRepository.create({
      id: generateId(),
      name,
      createDate: generateIsoDate(),
    });

    return this.accountRepository.save(account);
  }
}
