import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {

  utilisateurs: any[] = [];

  formUtilisateur: FormGroup = this.formBuilder.group(
    {
      nom:['',Validators.required],
      prenom: [],
      email:['', Validators.email],
      adresse:[],
    }
  );

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.formUtilisateur);
  }

  /**
   * methode pour ajouter un utilisateur
   */
  ajouterUtilisateur(){
    if (this.formUtilisateur.valid){
      this.utilisateurs.push(this.formUtilisateur.value);
      console.log(this.utilisateurs);
      console.log(this.formUtilisateur);
    } else {
      console.log("error");
    }
  }

  /**
   * methode pour trouver un utilisateur
   * @param id de l'utilisateur rechercher
   * @returns l'utilisateur qui possede l'id corespondant
   */
  trouverUtilisateur = (id:number) =>{
    let findUser;
    this.utilisateurs.forEach(utilisateur => {
      if(utilisateur.id == id){
        findUser = utilisateur;
      }
    });
    return findUser;
  }

  /**
   * methode qui supprime un utilisateur
   * @param id de l'utilisateur à supprimer
   */
  supprimerTUtilisateur = (id:number) =>{
    let suppTache = this.trouverUtilisateur(id);
    let idsupp = this.utilisateurs.indexOf(suppTache);
    this.utilisateurs.splice(idsupp, 1);
  };





}
