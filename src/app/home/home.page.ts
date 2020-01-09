import { Component } from '@angular/core';
import { ComicsService } from '../services/comics-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comics: any;
  items: any;

  constructor(public comicsService: ComicsService) {
    this.getCommits();
  }

  getCommits() {
    this.comics = this.comicsService.getCommit().subscribe(response => {
      this.items = response.data.results;
      this.items.map(item => {
        item.thumbnail.path = item.thumbnail.path + "/portrait_xlarge.jpg";
      });
      console.log(response.data.results);
    });
  }

}
