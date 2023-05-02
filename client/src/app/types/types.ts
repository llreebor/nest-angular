export interface IAuthUser {
	email: string
	password: string
}

export interface ICategory {
	id: number
	title: string
	createdAt: string
	updatedAt: string
	transactions: ITransaction[]
}

export interface ITransaction {
	id: number
	title: string
	createdAt: string
	updatedAt: string
	type: 'income' | 'expense'
	amount: number
	category?: ICategory
}

export interface ITransactionData {
	title: string
	amount: number
	type: 'income' | 'expense'
	category: number
}
