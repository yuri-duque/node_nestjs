
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAccountInput {
    name?: Nullable<string>;
    createDate?: Nullable<string>;
}

export abstract class IQuery {
    abstract accounts(): Nullable<Nullable<Account>[]> | Promise<Nullable<Nullable<Account>[]>>;

    abstract account(id: string): Nullable<Account> | Promise<Nullable<Account>>;
}

export abstract class IMutation {
    abstract createAccount(createAccountInput?: Nullable<CreateAccountInput>): Nullable<Account> | Promise<Nullable<Account>>;
}

export class Account {
    id?: Nullable<string>;
    name?: Nullable<string>;
    createDate?: Nullable<string>;
}

type Nullable<T> = T | null;
