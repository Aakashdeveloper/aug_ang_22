import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { NotFoundComponent } from './notfound/notFound.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { DetailsService } from './services/Details.Service';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './listing/listing.module';
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { RegisterFormsComponent } from './registerForm/registerForm.component';
import { RegisterFormService } from './registerForm/registerForm.service';
import { LoginFormService } from './loginForm/loginForm.service';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderService } from './services/order.service';


//decorator
@NgModule({

  // All the components and pipe 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DetailsComponent,
    LoginFormsComponent,
    RegisterFormsComponent,
    PlaceOrderComponent,
    ViewOrderComponent
  ],

  // All the modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    ListingModule
  ],

  // All the services
  providers: [
    DetailsService,
    LoginFormService,
    RegisterFormService,
    OrderService
  ],

  //only and only main components
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}