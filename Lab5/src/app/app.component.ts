import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { RouterOutlet, Router } from '@angular/router';
import {Category} from './models/category.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit {
  title = 'Lab5';

  categories: Category[] = [];

  constructor(private productsService: ProductsService , private router: Router) {
  }

  ngOnInit(): void {
    this.productsService.getCategories()
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories);
      })
  }

  goToProducts(categoryName: string) {
    this.router.navigate(['/products', categoryName]);
  }
}
