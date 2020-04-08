import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const URL = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit, OnDestroy {
  posts;
  err;
  subscription;
  posts$;
  constructor(private httpClient: HttpClient) {
    // this.subscription = this.httpClient.get(URL).subscribe(
    //   data => {
    //     console.log('DATA', data);
    //     this.posts = data.map(el => {
    //       return { title: el.title, body: el.body };
    //     });
    //   },
    //   err => {
    //     console.log(err);
    //     this.err = 'Unable to fetch data. Try after sometime';
    //   }
    // );
    this.posts$ = this.httpClient.get(URL).pipe(
      catchError(err => {
        console.log('Error', err);
        this.err = 'Unable to fetch data. Try after sometime';
        return [];
      }),
      map(data => {
        const newArr = data.map(el => {
          return {
            title: el.title,
            body: el.body
          };
        });

        return newArr;
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
