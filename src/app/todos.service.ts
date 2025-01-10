import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http : HttpClient) { }

  getTodosData(page: number, limit: number): Observable<any[]> {
    const params = `_page=${page}&_limit=${limit}`;
    return this.http.get<any[]>(`${this.apiUrl}?${params}`);
  }

  getusersData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
