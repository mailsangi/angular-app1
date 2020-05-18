import { createAction, props } from '@ngrx/store';
import Post from 'src/app/posts/post.model';

type Post_ = {
  title: string;
  description: string;
  index: number;
};

export const add = createAction(
  'ADD_POST',
  props<{
    payload: Post;
  }>()
);

export const remove = createAction('DEL_POST', props<{ payload: number }>());

export const update = createAction('UPDATE_POST', props<{ payload: Post_ }>());
