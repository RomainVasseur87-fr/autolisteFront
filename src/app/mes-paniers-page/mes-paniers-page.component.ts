import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Panier } from '../models/panier';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-mes-paniers-page',
  templateUrl: './mes-paniers-page.component.html',
  styleUrls: ['./mes-paniers-page.component.css']
})
export class MesPaniersPageComponent implements OnInit, OnDestroy {

  paniers!: Panier[];

  subscriptions : Subscription[] = [];

  constructor(private panApi: PanierService) { }

  ngOnInit(): void {
    let paniersSub = this.panApi.paniersObservable$.subscribe((paniers: Panier[])=>{
      this.paniers = paniers;
    },
    (err:any)=>{
      console.error(err);
    });
    this.panApi.getPaniers();
    this.subscriptions.push(paniersSub);
  }
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>{
      sub.unsubscribe();
    })
  }

}
