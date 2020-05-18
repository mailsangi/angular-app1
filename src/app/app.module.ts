import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormComponent } from './form/form.component';

import { StoreModule } from '@ngrx/store';
import PostsReducer from './store/posts/posts.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      posts: PostsReducer,
    }),
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
