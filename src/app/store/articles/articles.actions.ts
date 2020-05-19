import { createAction, props } from '@ngrx/store';
import Post from 'src/app/posts/post.model';

interface Post_ {
  title: string;
  description: string;
  index: number;
}
export const add = createAction('ADD_ARTICLE', props<{ payload: Post }>());
export const update = createAction(
  'UPDATE_ARTICLE',
  props<{ payload: Post_ }>()
);
