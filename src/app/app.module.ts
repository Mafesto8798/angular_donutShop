import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { DonutItemComponent } from './donut-item/donut-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  { path: 'donuts', component: HomePageComponent },
  { path: 'donuts/:id', component: DonutDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/donuts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DonutDetailComponent,
    PageNotFoundComponent,
    CartComponent,
    DonutItemComponent,
    CartItemComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
