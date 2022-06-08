import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginFromComponent } from './login-from/login-from.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SuccessFromComponent } from './success-from/success-from.component';

const routes: Routes = [

  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFromComponent},
  { path: 'success', component: SuccessFromComponent},
  { path: 'detail', component: DetailComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
