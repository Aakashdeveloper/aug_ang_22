import { NgModule}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';
import { NotFoundComponent } from './notfound/notFound.component'

const routes: Routes = [
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