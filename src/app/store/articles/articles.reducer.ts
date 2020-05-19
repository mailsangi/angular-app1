import { createReducer, on } from '@ngrx/store';
import Post from 'src/app/posts/post.model';
import * as ArticleActions from './articles.actions';

const initialState: Post[] = [];
const reducer = createReducer(
  initialState,
  on(ArticleActions.add, (state, action) => {
    return [action.payload, ...state];
  }),
  on(ArticleActions.update, (state, action) => {
    const { index, title, description } = action.payload;
    const newState = [...state];
    newState[index] = { title, description };
    return newState;
  })
);

export default function ArticlesReducer(state, action) {
  return reducer(state, action);
}
