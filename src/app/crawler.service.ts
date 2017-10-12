import {Injectable} from '@angular/core';
import * as Crawler from 'js-crawler';

@Injectable()
export class CrawlerService {

    constructor() {
    }

    crawl(url) {
      new Crawler().crawl(url, function onSuccess(page) {
        console.log("test");
        console.log(page.url);
      });
  }

}
