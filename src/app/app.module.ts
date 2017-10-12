import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoggerService} from './logger.service';
import {CrawlerService} from './crawler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
