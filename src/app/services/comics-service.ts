import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ComicsService {
  laura: any;

  constructor(private http: HttpClient) {
  }

  getComic(): Observable<any> {
      const getURL = `${environment.api}?ts=1&apikey=${environment.apiKey}&hash=${environment.hash}`;
      return this.http.get(getURL);
  }
}
