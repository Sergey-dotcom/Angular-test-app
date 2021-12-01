export type TransactionType = 'income' | 'outcome' | 'loan' | 'investment';

export const transactionTypes: TransactionType[] = [
  'income',
  'outcome',
  'loan',
  'investment',
];

type FullName = {
  first: string;
  last: string;
};

export interface Transaction {
  type: TransactionType;
  _id: string;
  amount: number;
  name: FullName;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface TransactionResults {
  total: number;
  data: Transaction[];
}

export type TransactionSummary = {
  [key in TransactionType]?: number
};
