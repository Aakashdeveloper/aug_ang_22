import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormsComponent } from './registerForm/registerForm.component'
import { LoginFormsComponent } from './loginForm/loginForm.component';

const routes: Routes = [
  {path:'login',component:LoginFormsComponent},
  {path:'register',component:RegisterFormsComponent},
  {path:'',component:RegisterFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
