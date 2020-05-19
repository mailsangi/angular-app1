import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import AppState from '../app.model';
import { Observable } from 'rxjs';
import Post from '../posts/post.model';
import * as ArticleActions from './../store/articles/articles.actions';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Post[]>;
  editMode: boolean;
  article: Post;
  currentArticleIdToUpdate: number;
  constructor(private store: Store<AppState>) {
    this.articles$ = this.store.pipe(select('articles'));
  }
  ngOnInit() {}

  submit(data: Post) {
    this.store.dispatch(ArticleActions.add({ payload: data }));
  }

  edit(index: number, article: Post) {
    this.editMode = true;
    this.currentArticleIdToUpdate = index;
    this.article = article;
  }
  update(data: Post) {
    this.store.dispatch(
      ArticleActions.update({
        payload: {
          ...data,
          index: this.currentArticleIdToUpdate,
        },
      })
    );
  }
}
