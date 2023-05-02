import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { TransactionsComponent } from './pages/transactions/transactions.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { RegistrationComponent } from './pages/registration/registration.component'
import { LoginComponent } from './pages/login/login.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'transactions',
		component: TransactionsComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'registration',
		component: RegistrationComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
