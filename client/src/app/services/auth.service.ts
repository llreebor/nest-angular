import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IAuthUser } from '../types/types'
import { BehaviorSubject, catchError, switchMap, tap, throwError } from 'rxjs'
import { Router } from '@angular/router'
import { ErrorService } from './error.service'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly API_URL = 'http://localhost:3001/api'
	private isAuth$ = new BehaviorSubject<boolean>(false)
	isAuth = this.isAuth$.asObservable()

	constructor(
		private http: HttpClient,
		private router: Router,
		private errorService: ErrorService
	) {
		const token = localStorage.getItem('token')
		this.isAuth$.next(!!token)
	}

	registration(user: IAuthUser) {
		return this.http
			.post(`${this.API_URL}/user`, user)
			.pipe(
				catchError(this.handleError.bind(this)),
				switchMap(() => this.login(user))
			)
			.subscribe(() => {
				this.router.navigate(['/transactions'])
			})
	}

	async login(user: IAuthUser) {
		return this.http
			.post(`${this.API_URL}/auth/login`, user)
			.pipe(
				tap((response: any) => {
					localStorage.setItem('token', response.token)
					localStorage.setItem('email', response.email)
					this.isAuth$.next(true)
				}),
				catchError(this.handleError.bind(this))
			)
			.subscribe(() => {
				this.router.navigate(['/transactions'])
			})
	}
	logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('email')
		this.isAuth$.next(false)
	}

	private handleError(error: HttpErrorResponse) {
		this.errorService.show(error?.error.message)
		return throwError(() => error?.error.message)
	}
}
