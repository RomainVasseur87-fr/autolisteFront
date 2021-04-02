import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {

  produitForm: FormGroup;

  @Input() produitsListe: Produit[] = [];

  @Output() produitsListeChange= new EventEmitter<Produit[]>();

  constructor(private produitfb: FormBuilder) {
    this.produitForm = new FormGroup({
      ingredients: new FormArray([
        new FormGroup({
          nom: produitfb.control('',Validators.required),
          quantite: produitfb.control('',[Validators.required, Validators.min(0)]),
        })
      ])
    })
  };

  get ingredients(): FormArray {
    return this.produitForm.get("ingredients") as FormArray;
  };


  /**
   * methode pour ajouter un produit
   */
  addProduit = () => {
    this.ingredients.push(new FormGroup({
      nom: this.produitfb.control(''),
      quantite: this.produitfb.control(''),
    }));
  };
  removeProduit = (i:number) => {
    this.ingredients.removeAt(i);
  };
  /**
   * methode pour soumettre le formulaire
   */
  soumettre = () => {
    // appel service
    let p: Produit[] = this.produitForm.value.ingredients;
    console.log(p);
    this.produitsListeChange.emit(p);
  }

  ngOnInit(): void {
    console.log(this.produitsListe);
    
    let produitFA: FormArray = new FormArray([]);
    this.produitsListe.forEach(produit => {
      produitFA.push(new FormGroup({
        nom: new FormControl(produit.nom),
        quantite: new FormControl(produit.quantite)
      }))
    })
    this.produitForm.setControl('ingredients', produitFA)
    console.log(this.produitForm);
  }

  debug(){
    console.log(this.produitsListe);
    
  }

}
