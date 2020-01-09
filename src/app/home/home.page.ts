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
  likes: number;
  dislikes: number;

  constructor(public comicsService: ComicsService) {
    this.getComics();
    this.likes = 0;
    this.dislikes = 0;
  }

  getComics() {
    this.comics = this.comicsService.getComic().subscribe(response => {
      this.items = response.data.results;
      this.items.map(item => {
        item.thumbnail.path = item.thumbnail.path + "/portrait_xlarge.jpg";
      });
      console.log(response.data.results);
    });
  }

  countLikes() {
    this.likes = this.likes + 1;
  }

  countDislikes() {
    this.dislikes = this.dislikes + 1;
  }
}
