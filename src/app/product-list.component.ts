import { Component } from '@angular/core'

import { products } from './products'

@Component({
  selector: 'app-product-list',
  template: `<h2>Products</h2>
    <ul>
      <li *ngFor="let product of products">
        <h3>
          <a
            [title]="product.name + ' details'"
            [routerLink]="['/products', product.id]"
          >
            {{ product.name }}
          </a>
        </h3>
        <p *ngIf="product.description">
          Description: {{ product.description }}
        </p>
        <button (click)="share()">Share</button>
        <app-product-alerts [product]="product" (notify)="onNotify()">
        </app-product-alerts>
      </li>
    </ul> `
})
export class ProductListComponent {
  products = products

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
