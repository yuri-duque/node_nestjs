export interface IAccount {
  id: string;
  name: string;
  createDate: string;
}

export enum TypeAccount {
  DEBIT = 'debit',
  CREDT = 'credit',
}
