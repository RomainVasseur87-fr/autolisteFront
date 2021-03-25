import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-page',
  templateUrl: './acceuil-page.component.html',
  styleUrls: ['./acceuil-page.component.css']
})
export class AcceuilPageComponent implements OnInit {

  today: number;

  constructor() {
    this.today = Date.now();
   }
  

  ngOnInit(): void {
  }

}
