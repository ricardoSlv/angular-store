import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product, products } from 'app/products'
import { CartService } from 'app/cart.service'

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
      <tr *ngFor="let product of products">
        <td>{{ product.name }}</td>
        <td>{{ product.price | currency: 'EUR' }}</td>
      </tr>
      <tr></tr>
      <tr>
        <td>Total</td>
        <td>{{ priceTotal() | currency: 'EUR' }}</td>
      </tr>
    </table>`
})
export class CartComponent implements OnInit {
  products: Product[]

  constructor(private cartService: CartService) {
    this.products = []
  }

  ngOnInit() {
    this.products = this.cartService.getItems()
  }

  addToCart(product: Product) {
    window.alert('Your product has been added to the cart!')
  }

  priceTotal() {
    products.map((p) => console.table(p))

    return this.products.reduce((value, product) => value + product.price, 0)
  }
}
