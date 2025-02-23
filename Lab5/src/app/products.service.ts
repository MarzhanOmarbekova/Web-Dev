import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from './models/category.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategories():Observable<Category[]>  {
    return this.http.get<Category[]>('assets/shop-data.json');
  }
}
