import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  host: string = "https://api.rawg.io/api/games?key=0a4eb94fe6664d608f2c8f5a6fb16c5f";
  game: string;
  constructor(private http: HttpClient) { }

  getResourceGames() {
    return this.http.get(this.host);
  }

  getGame(id: number) {
    this.game = `https://api.rawg.io/api/games/${id}?key=0a4eb94fe6664d608f2c8f5a6fb16c5f`;
    return this.http.get(this.game);
  }













}
