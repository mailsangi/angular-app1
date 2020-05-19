import { createAction, props } from '@ngrx/store';
import News from './news.model';

export const fetch = createAction('FETCH_NEWS');
export const addAll = createAction(
  'ADD_ALL_NEWS',
  props<{ payload: News[] }>()
);

export const remove = createAction('REMOVE_NEWS', props<{ payload: number }>());
export const removeSuccess = createAction(
  'REMOVE_NEWS@',
  props<{ payload: number }>()
);

export const create = createAction('CREATE_NEWS', props<{ payload: News }>());
export const add = createAction('ADD_POST', props<{ payload: News }>());
