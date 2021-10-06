import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from 'app/app.component'
import { TopBarComponent } from 'app/top-bar.component'
import { ProductListComponent } from 'app/product-list.component'
import { ProductAlertsComponent } from 'app/product-alerts.component'
import { ProductDetailsComponent } from 'app/product-details.component'
import { CartComponent } from 'app/cart.component'
import { ShippingComponent } from 'app/shipping.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
