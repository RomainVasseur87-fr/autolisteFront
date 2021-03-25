import { Component, OnInit } from '@angular/core';
import { Panier } from '../models/panier';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-mes-paniers-page',
  templateUrl: './mes-paniers-page.component.html',
  styleUrls: ['./mes-paniers-page.component.css']
})
export class MesPaniersPageComponent implements OnInit {

  paniers!: Panier[];

  constructor(private panApi: PanierService) { }

  ngOnInit(): void {
    this.panApi.getPaniers().subscribe((paniers: Panier[])=>{
      this.paniers = paniers;
      console.log(paniers);
    },
    (err:any)=>{
      console.error(err);
    });
  }

}
