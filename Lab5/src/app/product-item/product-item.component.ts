import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product} from '../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  increaseLike() {
    this.product.likes++;
  }
  removeProduct() {
    this.remove.emit(this.product.id);
  }

  goToKaspi(){
    window.open(this.product.kaspilink, '_blank');
  }
}
