import { Component, OnInit } from '@angular/core';
import {
    transactionTypes,
    Transaction, TransactionType
} from '../transaction';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
    activeType: TransactionType = transactionTypes[0];
    transactions: Transaction[] = [];

    constructor(
        private transactionService: TransactionService,
        private route:ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            const tab = params['tab'] ? parseInt(params['tab'] ) : 0;
            this.activeType = transactionTypes[tab];
        }); 
        this.getTransactions();
    }

    getTransactions(): void {
        this.transactionService
            .getTransactions()
            .subscribe(({ data }) => (this.transactions = data));
    }
}
