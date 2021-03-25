import { Component, Input, OnInit } from '@angular/core';
import { Adresse } from 'src/app/models/adresse';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  @Input() adresse! : Adresse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
