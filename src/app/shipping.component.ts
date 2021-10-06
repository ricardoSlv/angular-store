import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product, products } from 'app/products'
import { CartService } from 'app/cart.service'

@Component({
  selector: 'app-shipping',
  template: `<h3>Shipping Prices</h3>

    <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
      <span>{{ shipping.type }}</span>
      <span>{{ shipping.price | currency }}</span>
    </div>`
})
export class ShippingComponent implements OnInit {
  products = [] as Product[]
  shippingCosts = this.cartService.getShippingPrices()

  constructor(private cartService: CartService) {}

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
