import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestService {

  constructor(private http: Http) {
  }

  get(url, callback): any {
    this.getRequest(url).subscribe(result => {
      callback(result);
    });
  }

  private getRequest(url) {
    return this.http.get(url).map(response => response.json());
  }
}
