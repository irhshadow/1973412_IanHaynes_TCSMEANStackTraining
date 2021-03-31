import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tasks } from './Tasks';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(public http: HttpClient) { }
    url = "http://localhost:3000/task";


    storeTodo(todo: any) {
        this.http.post(this.url, todo).
            subscribe(result => console.log(result), error => console.log(error));
    }

    getTodo(): any {
        return this.http.get<Tasks[]>(this.url);            
    }


}