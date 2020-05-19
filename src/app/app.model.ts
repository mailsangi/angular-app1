import Post from './posts/post.model';
import News from './store/news/news.model';

export default interface AppState {
  posts: Post[];
  articles: Post[];
  news: News[];
}
