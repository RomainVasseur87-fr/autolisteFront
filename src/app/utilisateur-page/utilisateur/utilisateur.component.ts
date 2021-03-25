import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  @Input() utilisateur!: Utilisateur;
  
  constructor() { }

  ngOnInit(): void {
  }

}
