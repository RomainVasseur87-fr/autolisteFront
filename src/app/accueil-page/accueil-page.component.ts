import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {

  today: number;

  constructor() {
    this.today = Date.now();
   }
  

  ngOnInit(): void {
  }

}
