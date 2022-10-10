import { NgModule}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotFoundComponent } from './notfound/notFound.component'
import { DetailsComponent } from './details/details.component';
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { RegisterFormsComponent } from './registerForm/registerForm.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
    {path:'login',component: LoginFormsComponent},
    {path:'register',component: RegisterFormsComponent},
    {path:'viewBooking',component: ViewOrderComponent},
    {path:'placeOrder/:itemName',component: PlaceOrderComponent},
    {path:'details',component: DetailsComponent},
    {path:'listing/:item',component: ListingComponent},
    {path:'home',component: HomeComponent},
    {path:'',component: HomeComponent},
    {path:'**',pathMatch:'full',component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule{}