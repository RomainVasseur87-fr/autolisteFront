import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Panier } from 'src/app/models/panier';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Input() panier!: Panier;
  
  constructor(private route: ActivatedRoute, private panierApi : PanierService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.panierApi.getPanier(params.id).subscribe(panier=>{
        this.panier = panier;
      })
    })
  }

}
