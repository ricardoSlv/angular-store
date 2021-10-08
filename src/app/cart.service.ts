import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    )
  }

  addToCart(product: Product) {
    this.items.push(product)
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = []
    localStorage.setItem('cart', '[]')
    return this.items
  }
}
