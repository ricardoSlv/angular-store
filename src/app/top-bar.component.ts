import { Component } from '@angular/core'

@Component({
  selector: 'app-top-bar',
  template: `<a [routerLink]="['/']">
      <h1>My Store</h1>
    </a>
    <a class="button fancy-button" routerLink="/cart">
      <i class="material-icons">shopping_cart</i>
      Checkout
    </a>`
})
export class TopBarComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/