import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/component/app-main-page/app.component';
import { CustomerPhonePageComponent } from '../app/component/customer-phone-page/customer-phone-page.component';
import { HttpErrorInterceptor } from '../app/intercepter/http-error.interceptor';



@NgModule({
	declarations: [
		AppComponent,
		CustomerPhonePageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MatTableModule,
		MatPaginatorModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [{

		provide: HTTP_INTERCEPTORS,
		useClass: HttpErrorInterceptor,
		multi: true

	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
