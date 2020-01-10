import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics-service';
import { itemPreferences } from '../models/item-likes.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-comic',
  templateUrl: 'comic.page.html',
  styleUrls: ['comic.page.scss'],
})

export class ComicPage implements OnInit{
  comics: any;
  items: any;
  itemList: Array<itemPreferences>;

  constructor(public comicsService: ComicsService,
              private inAppBrowser: InAppBrowser,
              private platform: Platform) {}

  ngOnInit(){
    this.getComics();
  }

  launchSite() {
    this.inAppBrowser.create('');
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
