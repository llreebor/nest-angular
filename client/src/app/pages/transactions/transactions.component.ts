import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service'
import { TransactionService } from 'src/app/services/transaction.service'
import { ICategory, ITransaction } from 'src/app/types/types'

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
	@ViewChild('myForm') myForm: NgForm
	constructor(
		private categoryService: CategoryService,
		private transactionService: TransactionService
	) {}

	categories: ICategory[] = []
	transactions: ITransaction[] = []

	findAllCategories() {
		this.categoryService
			.findAll()
			.subscribe((data) => (this.categories = data))
	}

	findAllTransactions() {
		this.transactionService
			.findAll()
			.subscribe((data) => (this.transactions = data))
	}

	ngOnInit() {
		this.findAllCategories()
		this.findAllTransactions()
	}
}
