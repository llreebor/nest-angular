import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})
export class HomeComponent {
	constructor(public authService: AuthService) {}
	email = localStorage.getItem('email')
}
