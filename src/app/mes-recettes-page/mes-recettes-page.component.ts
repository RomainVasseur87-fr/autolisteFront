import { Component, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-mes-recettes-page',
  templateUrl: './mes-recettes-page.component.html',
  styleUrls: ['./mes-recettes-page.component.css']
})
export class MesRecettesPageComponent implements OnInit {

  recettes!: Recette[];

  constructor(private recApi: RecetteService) { }

  ngOnInit(): void {
    this.recApi.recetteObservable$.subscribe((recettes: Recette[])=>{
      this.recettes = recettes;
      console.log(recettes);
    },
    (err:any)=>{
      console.error(err);
    });
    this.recApi.getRecettes();
  }

}
