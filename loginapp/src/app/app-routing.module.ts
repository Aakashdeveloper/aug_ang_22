import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormsComponent } from './registerForm/registerForm.component'
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { UserListComponent } from './userList/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './gaurds/profilegaurd.service';
import { UserGaurdService } from './gaurds/usergaurd.service';

const routes: Routes = [
  {path:'profile',canActivate:[ProfileGaurdService],component:ProfileComponent},
  {path:'users',canActivate:[UserGaurdService],component:UserListComponent},
  {path:'login',component:LoginFormsComponent},
  {path:'register',component:RegisterFormsComponent},
  {path:'',component:RegisterFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService,
    UserGaurdService
  ]
})
export class AppRoutingModule { }
