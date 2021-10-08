import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

import { Product, products } from 'app/products'
import { CartService } from 'app/cart.service'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-cart',
  template: `<h2>Cart</h2>
    <p>
      <a routerLink="/shipping">Shipping Prices</a>
    </p>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr *ngFor="let item of items">
        <td>{{ item.name }}</td>
        <td>{{ item.price | currency: 'EUR' }}</td>
      </tr>
      <tr></tr>
      <tr>
        <td>Total</td>
        <td>{{ priceTotal() | currency: 'EUR' }}</td>
      </tr>
    </table>
    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name"> Name </label>
        <input id="name" type="text" formControlName="name" />
      </div>

      <div>
        <label for="address"> Address </label>
        <input id="address" type="text" formControlName="address" />
      </div>
      <button class="button" type="submit">Purchase</button>
    </form>`
})
export class CartComponent {
  items = this.cartService.getItems()

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  priceTotal() {
    return this.items.reduce((value, product) => value + product.price, 0)
  }

  onSubmit() {
    // Process checkout data here
    this.items = this.cartService.clearCart()
    alert(
      'Your order has been submitted ' +
        JSON.stringify({
          ...this.checkoutForm.value,
          total: this.priceTotal()
        })
    )
    this.checkoutForm.reset()
  }
}
