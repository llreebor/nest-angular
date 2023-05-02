import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons'
import { CategoryService } from 'src/app/services/category.service'
import { ICategory } from 'src/app/types/types'

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
})
export class CategoriesComponent {
	constructor(private categoryService: CategoryService) {}
	@ViewChild('myForm') myForm: NgForm
	@Input() categories: ICategory[] = []

	faEdit = faEdit
	faRemove = faRemove

	categoryId: number
	title: string
	method: 'create' | 'update' = 'create'

	delete(id: number) {
		this.categoryService.delete(id).subscribe(() => {
			const index = this.categories.findIndex(
				(category) => category.id === id
			)
			if (index !== -1) {
				this.categories.splice(index, 1)
			}
		})
	}

	create() {
		this.categoryService
			.create(this.title)
			.subscribe((data) => this.categories.push(data))
	}
	update() {
		this.categoryService
			.update(this.categoryId, this.title)
			.subscribe(() => {
				const index = this.categories.findIndex(
					(category) => category.id === this.categoryId
				)

				if (index !== -1) {
					this.categories[index].title = this.title
				}
				this.title = ''
			})
	}

	onSubmit() {
		if (this.method === 'create') {
			this.create()
			this.myForm.reset()
		} else {
			this.update()
		}

		this.method = 'create'
	}

	edit(id: number, title: string) {
		this.categoryId = id
		this.title = title
		this.method = 'update'
	}
}
