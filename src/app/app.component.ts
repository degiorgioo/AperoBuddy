import {Component, Input} from '@angular/core';
import {RequestService} from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AperoBuddy';
  beverages = [];
  api_url = 'http://localhost:9000/namics/beverages';
  @Input() character: string;

  constructor(private requestHandler: RequestService) {
  }

  search(character) {
    this.requestHandler.get(this.api_url, (data) => {
      this.beverages = this.filterByCharacter(character, data);
    });

  }

  add() {

  }

  filterByCharacter(character, list) {
    return list.filter(beverage => {
      if (beverage.name.toLowerCase().startsWith(character)) {
        return beverage.name;
      }
    });
  }

}
