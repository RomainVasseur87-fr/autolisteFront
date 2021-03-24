import { Component, Input, OnInit } from '@angular/core';
import { Recette } from 'src/app/models/recette';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  @Input() recette!: Recette;

  constructor() { }

  ngOnInit(): void {
  }

}
