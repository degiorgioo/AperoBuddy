import {Component} from '@angular/core';
import {LoggerService} from './logger.service';
import {CrawlerService} from './crawler.service';

import * as Crawler from 'js-crawler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AlphabetDrinks';

  constructor(private logger: LoggerService, private crawler: CrawlerService) {
  }

  click() {
    new Crawler().crawl({
      url: 'https://github.com',
      success: function(page) {
        console.log(page.url);
      },
      failure: function(page) {
        console.log(page.status);
      },
      finished: function(crawledUrls) {
        console.log(crawledUrls);
      }
    });
  }
}
