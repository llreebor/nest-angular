import { HttpClient } from '@angular/common/http'
import { Component, Input } from '@angular/core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TransactionService } from 'src/app/services/transaction.service'
import { ITransaction } from 'src/app/types/types'
@Component({
	selector: 'app-transactions-table',
	templateUrl: './transactions-table.component.html',
})
export class TransactionsTableComponent {
	constructor(private transactionService: TransactionService) {}
	@Input() transactions: ITransaction[]

	faTrash = faTrash
	currentPage = 1

	delete(id: number) {
		this.transactionService.delete(id).subscribe(() => {
			const index = this.transactions.findIndex(
				(transaction) => transaction.id === id
			)
			if (index !== -1) {
				this.transactions.splice(index, 1)
			}
		})
	}
}
