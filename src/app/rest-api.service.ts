import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http:HttpClient) { 

  }

  getData(url:string){
   return this.http.get(url);
  }

  deleteData(url:string,id:any){
    return this.http.delete(url+id);
  }
  
}
