import { Component, Input, OnInit } from '@angular/core';
import { Panier } from 'src/app/models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Input() panier!: Panier;
  constructor() { }

  ngOnInit(): void {
  }

}
