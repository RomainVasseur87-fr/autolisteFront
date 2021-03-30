import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Produit } from '../models/produit';
import { Process } from '../models/process';
import { Recette } from '../models/recette';
import { Theme } from '../models/theme';
import { RecetteService } from '../services/recette.service';
import { ThemeService } from '../services/theme.service';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-test-composant',
  templateUrl: './test-composant.component.html',
  styles: [`
        :host ::ng-deep .p-dialog .recette-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  styleUrls: ['./test-composant.component.css']
})
export class TestComposantComponent implements OnInit {

  recetteDialog: boolean = false;

  recettes!: Recette[];
  recettesResult!: Recette[];

  recette: Recette = <Recette>{
    id: 0,
    version: 0,
    nom: "",
    nbConvives: 0,
    process: <Process>{},
    produits: [],
    themes: [],
    image: <File>{},
  };

  selectedRecettes!: Recette[];

  submitted: boolean = false;

  themesDispo!: Theme[];

  constructor(private recetteService: RecetteService,private themeService: ThemeService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.recetteService.recetteObservable$.subscribe((data) => {
      this.recettes = data;
      this.recettesResult = data;
    });
    this.recetteService.getRecettes();

    this.themeService.getThemes().subscribe(themesDispo =>{
      this.themesDispo = themesDispo;

    })

  }

  openNew() {
    this.recette = <Recette>{};
    this.submitted = false;
    this.recetteDialog = true;
  }

  deleteSelectedRecettes() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.recettes = this.recettes.filter(val => !this.selectedRecettes.includes(val));
        this.recettes.forEach(recette => {
          this.recetteService.deleteRecette(recette.id).subscribe(resp => {
            console.log(resp);
          });
        })
        this.selectedRecettes = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }
  editRecette(recette: Recette) {
    this.recette = recette;
    this.recetteDialog = true;
    this.recetteService.updateRecette(this.recette.id, recette).subscribe(resp => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recette mise à jour', life: 3000 });
      console.log(resp);
    });
  }

  deleteRecette(recette: Recette) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + recette.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.recettes = this.recettes.filter(val => val.id !== recette.id);
        this.recette = <Recette>{};
        this.recetteService.deleteRecette(recette.id).subscribe(resp => {
          console.log(resp);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recette supprimée', life: 3000 });
        });

      }
    });
  }

  hideDialog() {
    this.recetteDialog = false;
    this.submitted = false;
  }
  saveRecette() {
    this.submitted = true;

    if (this.recette.nom.trim()) {
      if (this.recette.id) {
        this.recettes[this.findIndexById(this.recette.id.toString())] = this.recette;
        this.recetteService.updateRecette(this.recette.id, this.recette).subscribe(resp=>{
          console.log(resp);
          this.recetteService.getRecettes();
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recette Updated', life: 3000 });
        });
        
      }
      else {
        this.recetteService.saveRecette(this.recette).subscribe(resp=>{
          this.recetteService.getRecettes();
          console.log(resp);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recette Created', life: 3000 });
        });
        
      }

      this.recettes = [...this.recettes];
      this.recetteDialog = false;
      this.recette = <Recette>{};
    }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.recettes.length; i++) {
      if (this.recettes[i].id.toString() === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  filtree(event: any) {
    this.recettes = this.recettesResult.filter(recette => recette.nom.includes(event.target.value));
  }

}


