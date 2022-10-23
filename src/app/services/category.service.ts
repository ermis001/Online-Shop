import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { CategoryInterface } from '../Interfaces/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:SdaHttpClient) { }

addCategory(category:CategoryInterface):Observable<CategoryInterface>{
    return this.http.post('Category',category)
}

getCategory():Observable<CategoryInterface[]>{
   return this.http.getAll<CategoryInterface>('Category')
}

deleteCategory(id:number):Observable<boolean>{
   return this.http.delete('Category',id)
}

updateCategory(id:number,data:CategoryInterface){
   return this.http.put('Category',id,data)
}

getCategoryById(id:number):Observable<CategoryInterface>{
   return this.http.getById('Category',id)
}

}
