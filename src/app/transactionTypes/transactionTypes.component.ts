import { Component, OnInit } from '@angular/core';
import { transactionTypes, TransactionType } from '../transaction';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-types',
  templateUrl: './transactionTypes.component.html',
  styleUrls: ['./transactionTypes.component.scss'],
})
export class TransactionTypesComponent implements OnInit {
  activeTypeIndex: number = 0;
  transactionTypes: TransactionType[] = transactionTypes;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const tabFromQuery = this.route.snapshot.queryParamMap.get('tab');
    this.activeTypeIndex = tabFromQuery ? parseInt(tabFromQuery) : 0;
  }

  onTabChange(selectedTabIndex: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: selectedTabIndex,
      },
    });
    this.activeTypeIndex = selectedTabIndex;
  }
}
