import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Displaydonut } from '../displaydonut';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Displaydonut = {} as Displaydonut;
  @Input() cartIndex: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeItem(): void {
    this.cartService.removeItemFromCart(this.cartIndex);
  }
}
