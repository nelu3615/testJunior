import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;
  constructor(private rest: RestapiService, private router: Router) { }

  getGames() {
    this.rest.getResourceGames()
    .subscribe(
      data => {
        this.games = data;
        console.log("results",data);
      }
    ), err => {
      console.log(err);
    }
  }

  ngOnInit(): void {
    this.getGames();
  }

}
