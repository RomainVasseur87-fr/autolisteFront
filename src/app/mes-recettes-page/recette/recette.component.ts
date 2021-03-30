import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/models/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  @Input() recette!: Recette;

  constructor(private route: ActivatedRoute, private recetteApi: RecetteService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.recetteApi.getRecette(params.id).subscribe(recette=>{
        this.recette = recette;
      })
    })
  }

}
