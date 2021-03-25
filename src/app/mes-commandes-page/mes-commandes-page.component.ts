import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-mes-commandes-page',
  templateUrl: './mes-commandes-page.component.html',
  styleUrls: ['./mes-commandes-page.component.css']
})
export class MesCommandesPageComponent implements OnInit {

  commandes!: Commande[];

  constructor(private comApi: CommandeService) { }

  ngOnInit(): void {
    this.comApi.getCommandes().subscribe((commandes: Commande[])=>{
      this.commandes = commandes;
      console.log(commandes);
    },
    (err:any)=>{
      console.error(err);
    });
  }

}
