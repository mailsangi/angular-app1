import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as NewsActions from './news.actions';
import { switchMap, map } from 'rxjs/operators';
import { NewsService } from 'src/app/home/news.service';
import News from './news.model';
@Injectable({
  providedIn: 'root',
})
export class NewsEffects {
  getAll = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.fetch),
      switchMap(() => {
        return this.newsService.fetch().pipe(
          map((res) => {
            console.log('RES', res);
            return { type: 'ADD_ALL_NEWS', payload: res };
          })
        );
      })
    );
  });

  createdfhkjsf = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.create),
      switchMap((action) => {
        console.log('Action', action);
        return this.newsService.create(action.payload).pipe(
          map((res) => {
            console.log('RESPONSE', res);
            return { type: 'ADD_POST', payload: res };
          })
        );
      })
    );
  });

  fhdjkfkhj = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.remove),
      switchMap((action) => {
        return this.newsService.delete(action.payload).pipe(
          map((res) => {
            console.log('RES For DElete', res);
            return { type: 'REMOVE_NEWS@', payload: action.payload };
          })
        );
      })
    )
  );
  constructor(private actions$: Actions, private newsService: NewsService) {}
}
