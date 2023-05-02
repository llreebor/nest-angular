import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ICategory } from '../types/types'

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	constructor(private http: HttpClient) {}

	findAll() {
		return this.http.get<ICategory[]>(`categories`)
	}

	create(title: string) {
		return this.http.post<ICategory>('categories', { title })
	}

	delete(id: number) {
		return this.http.delete(`categories/category/${id}`)
	}

	update(id: number, title: string) {
		return this.http.patch(`categories/category/${id}`, { title })
	}
}
