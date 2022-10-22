import { Injectable } from '@angular/core';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient:SdaHttpClient) { }
   




  addProduct(product:any){
    return this.httpClient.post('Product',product)
  }
  
  getProduct(){
    return this.httpClient.getAll('Product')
  }


}
