import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Response} from '@angular/http/src/static_response';
import 'rxjs/rx';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  url:string="http://localhost:3000/records/";

  constructor(private http:Http) { }

  getItem(id)
  {
    return this.http.get(this.url+id)
    .map((response:any)=>response)
   
  }

  postUser(obj)
  {
    return this.http.post(this.url,obj)
    .map((response:any)=>response)
  }
}
