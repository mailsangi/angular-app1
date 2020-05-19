import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import AppState from '../app.model';
import News from '../store/news/news.model';
import { Observable } from 'rxjs';
import * as NewsActions from './../store/news/news.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news$: Observable<News[]>;
  constructor(private store: Store<AppState>) {
    this.news$ = this.store.pipe(select('news'));
  }

  ngOnInit(): void {
    this.store.dispatch(NewsActions.fetch());
  }

  postData() {
    const obj = {
      title: 'fdskjfhs',
      body: 'hdskjfhsd',
      userId: 89,
    };
    this.store.dispatch(NewsActions.create({ payload: obj }));
  }

  delete(index: number) {
    this.store.dispatch(NewsActions.remove({ payload: index }));
  }
}
