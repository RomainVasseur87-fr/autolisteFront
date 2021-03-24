import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilPageComponent } from './acceuil-page/acceuil-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { MesCommandesPageComponent } from './mes-commandes-page/mes-commandes-page.component';
import { MesPaniersPageComponent } from './mes-paniers-page/mes-paniers-page.component';
import { MesRecettesPageComponent } from './mes-recettes-page/mes-recettes-page.component';

const routes: Routes = [

  {path:'', component: AcceuilPageComponent, pathMatch:'full'},
  {path:'mesRecettes', component: MesRecettesPageComponent, pathMatch:'full'},
  {path:'mesPaniers', component: MesPaniersPageComponent, pathMatch:'full'},
  {path:'mesCommandes', component: MesCommandesPageComponent, pathMatch:'full'},
  {path:'connexion', component: ConnexionPageComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
