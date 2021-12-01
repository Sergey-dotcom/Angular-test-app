import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TransactionResults } from './transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {
    constructor(private http: HttpClient) {}

    getTransactions(): Observable<TransactionResults> {
        return this.http.get<TransactionResults>('/assets/data.json');
    }
}
