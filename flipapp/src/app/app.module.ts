import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

//decorator
@NgModule({

  // All the components and pipe 
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  // All the modules
  imports: [
    BrowserModule
  ],

  // All the services
  providers: [],

  //only and only main components
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}