import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { ClothsComponent } from './Home/cloths.component';
import { MobileComponent } from './Home/mobile.component';

//decorator
@NgModule({

  // All the components and pipe 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClothsComponent,
    MobileComponent
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