import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-page',
  templateUrl: './utilisateur-page.component.html',
  styleUrls: ['./utilisateur-page.component.css']
})
export class UtilisateurPageComponent implements OnInit {

  utilisateurs!: Utilisateur[];

  constructor(private utiApi: UtilisateurService) { }

  ngOnInit(): void {
    this.utiApi.getUtilisateurs().subscribe((utilisateurs: Utilisateur[])=>{
      this.utilisateurs = utilisateurs;
      console.log(utilisateurs);
    },
    (err:any)=>{
      console.error(err);
    });
  }

}
