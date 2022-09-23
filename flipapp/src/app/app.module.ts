import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { ClothsComponent } from './Home/cloths.component';
import { MobileComponent } from './Home/mobile.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { NotFoundComponent } from './notfound/notFound.component';
import { HomeService } from './services/Home.service';
import { ListingService } from './services/Listing.service';
import { ListingComponent } from './listing/listing.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { ProdSearchPipe } from './pipes/search.pipe';
import { DetailsService } from './services/Details.Service';
import { RatingFilterComponent } from './filters/ratingFilter';
import { CostFilterComponent } from './filters/costFilter.component';

//decorator
@NgModule({

  // All the components and pipe 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClothsComponent,
    MobileComponent,
    MyUpperPipe,
    NotFoundComponent,
    ListingComponent,
    DetailsComponent,
    ProdSearchPipe,
    RatingFilterComponent,
    CostFilterComponent
  ],

  // All the modules
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  // All the services
  providers: [
    HomeService,
    ListingService,
    DetailsService
  ],

  //only and only main components
  bootstrap: [
    AppComponent
  ]
})

export class AppModule{}