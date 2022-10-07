import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormsComponent } from './registerForm/registerForm.component';
import { RegisterFormService } from './registerForm/registerForm.service';
import { LoginFormService } from './loginForm/loginForm.service';
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { UserService } from './userList/userlist.service';
import { UserListComponent } from './userList/userlist.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormsComponent,
    LoginFormsComponent,
    UserListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterFormService,
    LoginFormService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
