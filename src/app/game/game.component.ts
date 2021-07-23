import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() image: string;
  @Input() release: string;
  @Input() category: string;
  @Input() metacritic: number;

  @Output() openGame = new EventEmitter()
  constructor( private rest: RestapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
