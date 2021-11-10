import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPhonePageComponent } from './component/customer-phone-page/customer-phone-page.component';

const routes: Routes = [
{ path: '', redirectTo: 'customerPhone', pathMatch: 'full'},
{ path: 'customerPhone', component: CustomerPhonePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
