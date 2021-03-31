import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-mes-commandes-page',
  templateUrl: './mes-commandes-page.component.html',
  styleUrls: ['./mes-commandes-page.component.css']
})
export class MesCommandesPageComponent implements OnInit, OnDestroy {

  commandes!: Commande[];

  subscriptions : Subscription[] = [];

  constructor(private comApi: CommandeService) { }

  ngOnInit(): void {
    let commSub = this.comApi.commandesObservable$.subscribe((commandes: Commande[])=>{
      this.commandes = commandes;
    },
    (err:any)=>{
      console.error(err);
    });
    this.comApi.getCommandes();
    this.subscriptions.push(commSub);
  }
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>{
      sub.unsubscribe();
    })
  }

}
