import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import News from '../store/news/news.model';
const URL = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  fetch = () => this.http.get(`${URL}`);

  create = (data: News) => this.http.post(`${URL}`, data);

  delete = (index: number) => this.http.delete(`${URL}/${index}`);
}
