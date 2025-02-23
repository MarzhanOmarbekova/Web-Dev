import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../models/product.model';
import {ProductsService} from '../products.service';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  categoryName: string = '';

  constructor(
    private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryName') || '';
      this.productService.getCategories()
        .subscribe(categories => {
          const category =  categories.find(c => c.name === this.categoryName);
          this.products = category ? category.products : [];
        })
    })
  }

  onRemoveProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
