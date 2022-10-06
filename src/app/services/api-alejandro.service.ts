import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAlejandroService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(): Observable<any>
  {
    return this.http.get('http://www.controlbeach.com.ar/afiliados/items/read');
  }
}
