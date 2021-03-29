import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Panier } from 'src/app/models/panier';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-mes-paniers-list',
  templateUrl: './mes-paniers-list.component.html',
  styleUrls: ['./mes-paniers-list.component.css']
})
export class MesPaniersListComponent implements OnInit {

  panierDialog: boolean = false;

  paniers! : Panier[];
  paniersResult!: Panier[];

  panier! : Panier;

  selectedPaniers! : Panier[];

  submitted: boolean = false;

  statuses!:any;

  constructor(private panierService: PanierService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.panierService.getPaniers().subscribe(data => {
      this.paniers = data;
      this.paniersResult = data;
    })
  }

  openNew() {
    this.panier = <Panier>{};
    this.submitted = false;
    this.panierDialog = true;
  }
  deleteSelectedPaniers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.paniers = this.paniers.filter(val => !this.selectedPaniers.includes(val));
        this.selectedPaniers = [];

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Paniers Supprimés', life: 3000 });
      }
    });
  }
  editPanier(panier: Panier) {
    this.panier = { ...panier };
    this.panierDialog = true;
    this.panierService.updatePanier(this.panier.id, panier).subscribe(resp => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Panier mise à jour', life: 3000 });
      console.log(resp);
    });
  }
  deletePanier(panier: Panier) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + panier.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.paniers = this.paniers.filter(val => val.id !== panier.id);
        this.panier = <Panier>{};
        this.panierService.deletePanier(this.panier.id).subscribe(resp => {
          console.log(resp);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Recette supprimée', life: 3000 });
        });
        
      }
    });
  }

  hideDialog() {
    this.panierDialog = false;
    this.submitted = false;
  }
  savePanier() {
    this.submitted = true;

    if (this.panier.nom.trim()) {
      if (this.panier.id) {
        this.paniers[this.findIndexById(this.panier.id.toString())] = this.panier;
        this.panierService.updatePanier(this.panier.id, this.panier);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'panier Updated', life: 3000 });
      }
      else {
        this.panierService.savePanier(this.panier);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'panier Created', life: 3000 });
      }

      this.paniers = [...this.paniers];
      this.panierDialog = false;
      this.panier = <Panier>{};
    }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.paniers.length; i++) {
      if (this.paniers[i].id.toString() === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  filtree(event: any) {
    this.paniers = this.paniersResult.filter(panier => panier.nom.includes(event.target.value));
  }

}