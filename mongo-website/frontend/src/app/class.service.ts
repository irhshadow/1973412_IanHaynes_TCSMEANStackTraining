import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from './model.class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  storeClass(classRef:any){
    this.http.post("http://localhost:8000/add",classRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  getClass(id:any):Observable<Class>{
    console.log(id);
     return this.http.get<Class>("http://localhost:8000/show/" + id)
  }
  deleteClass(id:any):any{
    console.log("In class service");
    console.log("http://localhost:8000/delete/" + id);
    
    return this.http.post("http://localhost:8000/delete/" + id,{responseType:'text'});
  }
  updateClassPrice(productRef:any){
    this.http.put("http://localhost:8000/update",productRef);
  }
}
