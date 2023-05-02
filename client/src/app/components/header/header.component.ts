import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
})
export class HeaderComponent {
	constructor(
		public modalService: ModalService,
		public authService: AuthService
	) {}

	openModal() {
		// this.modalService.showModalToggle()
	}

	onLogout() {
		this.authService.logout()
	}
}
