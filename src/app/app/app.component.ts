import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showMainMenu = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      console.log('Router events', this.router.url);
      if (this.router.url.includes('shop')) {
        this.showMainMenu = false;
      } else {
        this.showMainMenu = true;
      }
    });
  }

  ngOnInit(): void {}

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
