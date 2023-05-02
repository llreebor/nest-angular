import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ITransaction, ITransactionData } from '../types/types'

@Injectable({
	providedIn: 'root',
})
export class TransactionService {
	constructor(private http: HttpClient) {}

	findAll() {
		return this.http.get<ITransaction[]>('transactions')
	}

	create(data: ITransactionData) {
		return this.http.post<ITransaction>('transactions', data)
	}

	delete(id: number) {
		return this.http.delete(`transactions/transaction/${id}`)
	}
}
