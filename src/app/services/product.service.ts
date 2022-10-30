import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { ProductInterface } from '../Interfaces/product-interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:SdaHttpClient) { }

  addProduct(product:ProductInterface):Observable<ProductInterface>{
   return this.http.post('Product',product)
  }
  
  getProducts():Observable<ProductInterface[]>{
    return this.http.getAll<ProductInterface>('Product')
  }

  deleteProduct(id:number):Observable<boolean>{
    return this.http.delete('Product',id)
  }
  
  updateProduct(id:number,data:ProductInterface){
    return this.http.put('Product',id,data)
  }

  getProductById(id:number):Observable<ProductInterface>{
    return this.http.getById('Product',id)
  }

}
