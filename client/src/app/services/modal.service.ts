import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	private showModal$ = new BehaviorSubject<boolean>(false)

	get showModal() {
		return this.showModal$.getValue()
	}

	showModalToggle() {
		this.showModal$.next(!this.showModal)
	}
}
