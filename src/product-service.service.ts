import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http : HttpClient  ) { }
baseurl : string | undefined

Getproducts() : Observable<Product>{
return this.http.get("this.baseurl/")
}


}
