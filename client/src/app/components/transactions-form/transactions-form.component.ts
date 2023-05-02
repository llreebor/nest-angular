import { Component, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { TransactionService } from 'src/app/services/transaction.service'
import { ICategory, ITransaction } from 'src/app/types/types'

@Component({
	selector: 'app-transactions-form',
	templateUrl: './transactions-form.component.html',
})
export class TransactionsFormComponent {
	constructor(private transactionService: TransactionService) {}
	@Input() categories: ICategory[] = []
	@Input() transactions: ITransaction[] = []
	title: string
	amount: number
	type: 'income' | 'expense'
	category: number

	onSubmit(form: NgForm) {
		this.transactionService
			.create({
				title: this.title,
				amount: +this.amount,
				type: this.type,
				category: +this.category,
			})
			.subscribe((data) => {
				const categoryItem = this.categories.find(
					(item) => item.id === data.category?.id
				)

				const transactionWithCategory: ITransaction = {
					...data,
					category: categoryItem,
				}
				this.transactions.unshift(transactionWithCategory)
			})

		form.reset()
	}
}
