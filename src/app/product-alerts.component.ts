import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Product } from 'app/products'

@Component({
  selector: 'app-product-alerts',
  template: `<p *ngIf="product && product.price > 700">
    <button (click)="notify.emit()">Notify Me</button>
  </p>`
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product
  @Output() notify = new EventEmitter()

  constructor() {}

  ngOnInit() {}
}
