import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
})
export class RegistrationComponent {
	user: FormGroup
	constructor(private authService: AuthService) {
		this.user = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			]),
		})
	}

	onSubmit() {
		if (this.user.valid) {
			this.authService.registration(this.user.value)
		}
	}
}
