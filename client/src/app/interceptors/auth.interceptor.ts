import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
const API_URL = 'http://localhost:3001/api'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		// Получаем токен из localStorage
		const token = localStorage.getItem('token')

		// Если токен есть, добавляем его в заголовки запроса
		if (token) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
				},
				url: `${API_URL}/${request.url}`,
			})
		}

		// Пропускаем запрос дальше по цепочке обработчиков
		return next.handle(request)
	}
}
