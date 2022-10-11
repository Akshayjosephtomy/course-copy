import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private x:HttpClient) { }

  viewCourse=()=>{
    return this.x.get("http://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
