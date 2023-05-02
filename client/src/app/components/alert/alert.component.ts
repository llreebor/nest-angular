import { Component } from '@angular/core'
import { ErrorService } from 'src/app/services/error.service'

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
})
export class AlertComponent {
	constructor(public errorService: ErrorService) {}
}
