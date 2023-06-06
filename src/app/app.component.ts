import { Component, OnInit } from '@angular/core';
import { Router, NavigationError, NavigationEnd } from '@angular/router';
import rg4js from 'raygun4js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      // Track page views when the NavigationEnd event occurs
      if (event instanceof NavigationEnd) {
        rg4js('trackEvent', {
          type: 'pageView',
          path: event.url
        });
      }

      // Track navigation errors when the NavigationError event occurs
      if (event instanceof NavigationError) {
        // Track navigation error
        rg4js('send', {
          error: event.error
        });
      }
    });
  }
}