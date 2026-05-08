import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Social } from './social/social';
import { Dummyproducts } from './dummyproducts/dummyproducts';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: Home},
{path: 'dummyproducts/:productID/:productTitle', component: ProductDetails},
{path: 'dummyproducts', component: Dummyproducts, pathMatch: 'full'},
{path: 'contact', component: Contact},
{path: 'social', component: Social}

];
