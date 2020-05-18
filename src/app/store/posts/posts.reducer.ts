import { createReducer, on } from '@ngrx/store';
import * as PostActions from './posts.actions';
import Post from 'src/app/posts/post.model';

const initialState: Post[] = [];
const reducer = createReducer(
  initialState,
  on(PostActions.add, (state, action) => {
    console.log('Action-ADDPOST', state, action);
    return [action.payload, ...state];
  }),
  on(PostActions.remove, (state, action) => {
    return state.filter((el, index) => index !== action.payload);
  }),
  on(PostActions.update, (state, action) => {
    const { title, description, index } = action.payload;
    const newState = [...state];
    newState[index] = { title, description };
    return newState;
  })
);

export default function PostsReducer(state, action) {
  return reducer(state, action);
}
