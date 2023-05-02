import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { TransactionsComponent } from './pages/transactions/transactions.component'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { ModalComponent } from './components/modal/modal.component'
import { RegistrationComponent } from './pages/registration/registration.component'
import { LoginComponent } from './pages/login/login.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AlertComponent } from './components/alert/alert.component'
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component'
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CategoriesComponent,
		TransactionsComponent,
		HeaderComponent,
		NotFoundComponent,
		ModalComponent,
		RegistrationComponent,
		LoginComponent,
		AlertComponent,
		TransactionsFormComponent,
		TransactionsTableComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		FormsModule,
		NgxPaginationModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
