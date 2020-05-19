import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormComponent } from './form/form.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import PostsReducer from './store/posts/posts.reducer';
import ArticlesReducer from './store/articles/articles.reducer';
import NewsReducer from './store/news/news.reducer';
import { NewsEffects } from './store/news/news.effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      posts: PostsReducer,
      articles: ArticlesReducer,
      news: NewsReducer,
    }),
    EffectsModule.forRoot([NewsEffects]),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'articles',
        component: ArticlesComponent,
      },
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    ArticlesComponent,
    FormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
