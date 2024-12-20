import { Component, Input } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
})
export class ModalComponent {
	@Input() title: string
	constructor(public modalService: ModalService) {}
}
