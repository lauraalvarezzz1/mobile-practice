import { Component } from '@angular/core';
import { ComicsService } from '../services/comics-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prueba;

  constructor(public comicsService: ComicsService) {
    this.getCommits();
  }

  getCommits() {
    this.prueba = this.comicsService.getCommit().subscribe(response => {
      console.log(response);
    });
  }

}
