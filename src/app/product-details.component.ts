import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product, products } from 'app/products'
import { CartService } from 'app/cart.service'

@Component({
  selector: 'app-product-details',
  template: `<h2>Product Details</h2>
    <div *ngIf="product">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price | currency: 'EUR' }}</h4>
      <p>{{ product.description }}</p>
      <button (click)="addToCart(product)">Buy</button>
    </div>`
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))

    this.product = products.find((product) => product.id === productIdFromRoute)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }
}
