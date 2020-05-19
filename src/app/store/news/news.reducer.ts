import { createReducer, on } from '@ngrx/store';
import News from './news.model';
import * as NewsActions from './news.actions';

const initialState: News[] = [];
const reducer = createReducer(
  initialState,
  on(NewsActions.addAll, (state, action) => {
    return [...action.payload];
  }),
  on(NewsActions.add, (state, action) => {
    return [action.payload, ...state];
  }),
  on(NewsActions.removeSuccess, (state, action) =>
    state.filter((el, i) => el.id !== action.payload)
  )
);

export default function NewsReducer(state, action) {
  return reducer(state, action);
}
