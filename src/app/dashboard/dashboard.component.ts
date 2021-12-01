import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import {
  transactionTypes,
  TransactionType,
  TransactionResults,
  TransactionSummary,
  Transaction,
} from '../transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  transactionTypes: TransactionType[] = transactionTypes;
  transactionSummary: TransactionSummary = {};
  transactionTotal: number = 0;

  constructor(
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.getTransactionsSummary();
  }

  getTransactionsSummary(): void {
    this.transactionService.getTransactions().subscribe(({ data, total }) => {
      this.transactionTotal = total;
      this.transactionSummary = data.reduce(
        (acc: TransactionSummary, item: Transaction) => {
          const currentValue = acc[item.type] || 0;
          acc[item.type] = currentValue + 1;

          return acc;
        },
        {}
      );
    });
  }
}
