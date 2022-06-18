import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IResultEmotion } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'responseType': 'json'
    }),
  };

  getEmotions(body:any):Observable<any> {
    return this.http.post('api/getEmotions',body);
  }
  constructor(private http:HttpClient) { 

  }
}
