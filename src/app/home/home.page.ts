import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics-service';
import { itemPreferences } from '../models/item-likes.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  comics: any;
  items: any;
  itemList: Array<itemPreferences>;

  constructor(public comicsService: ComicsService) {}

  ngOnInit(){
    this.getComics();
    
  }
  getComics() {
    this.comics = this.comicsService.getComic().subscribe(response => {
      this.items = response.data.results;
      this.createList(this.items);
      this.items.map(item => {
        item.thumbnail.path = item.thumbnail.path + "/portrait_xlarge.jpg";
      });
    });
  }

  countLikes(index) {
    this.itemList[index].likes = this.itemList[index].likes + 1;
  }

  countDislikes(index) {
    this.itemList[index].dislikes = this.itemList[index].dislikes + 1;
  }

  createList(items) {
    this.itemList= new Array<itemPreferences>();
    
    for(var i = 0; i < items.length; i++) {
      let itemp: itemPreferences = {
        likes: 0,
        dislikes: 0
      };
      this.itemList.push(itemp);
    }
  }
}
