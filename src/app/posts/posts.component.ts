import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import Post from './post.model';
import * as PostActions from '../store/posts/posts.actions';
import { Observable } from 'rxjs';
import AppState from '../app.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  editMode: boolean;
  post: Post;
  currentPostIdToUpdate: number;
  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.pipe(select('posts'));
  }

  ngOnInit(): void {}

  submit(data: Post) {
    console.log('Data', data);
    this.store.dispatch(PostActions.add({ payload: data }));
  }

  delete(i: number) {
    this.store.dispatch(PostActions.remove({ payload: i }));
  }

  edit(i: number, data: Post) {
    this.editMode = true;
    this.post = data;
    this.currentPostIdToUpdate = i;
  }

  update(data: Post) {
    console.log('Updated data', data);
    this.editMode = false;
    this.store.dispatch(
      PostActions.update({
        payload: { ...data, index: this.currentPostIdToUpdate },
      })
    );
  }
}
