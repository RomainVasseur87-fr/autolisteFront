import { Component, Input, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  @Input() commande!: Commande;
  
  constructor() { }

  ngOnInit(): void {
  }

}
