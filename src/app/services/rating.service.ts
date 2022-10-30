import { Injectable } from '@angular/core';
import { Observable, race } from 'rxjs';
import { SdaHttpClient } from '../data-layer/sda-be-mock.service';
import { RatingInterface } from '../Interfaces/rating-interface';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:SdaHttpClient) { }

   addRating(rating:RatingInterface):Observable<RatingInterface>{
    return this.http.post('Rating', rating);
   }
   

   

}
