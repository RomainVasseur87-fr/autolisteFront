import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { CommandeComponent } from './mes-commandes-page/commande/commande.component';
import { MesCommandesPageComponent } from './mes-commandes-page/mes-commandes-page.component';
import { MesPaniersPageComponent } from './mes-paniers-page/mes-paniers-page.component';
import { PanierComponent } from './mes-paniers-page/panier/panier.component';
import { MesRecettesPageComponent } from './mes-recettes-page/mes-recettes-page.component';
import { RecetteComponent } from './mes-recettes-page/recette/recette.component';
import { UtilisateurPageComponent } from './utilisateur-page/utilisateur-page.component';


const routes: Routes = [

  {path:'', component: AccueilPageComponent, pathMatch:'full'},
  {path:'utilisateur/:id', component: UtilisateurPageComponent, pathMatch:'full'},
  {path:'mesRecettes', component: MesRecettesPageComponent, pathMatch:'full'},
  {path:'mesRecettes/:id', component: RecetteComponent, pathMatch:'full'},
  {path:'mesPaniers', component: MesPaniersPageComponent, pathMatch:'full'},
  {path:'mesPaniers/:id', component: PanierComponent, pathMatch:'full'},
  {path:'mesCommandes', component: MesCommandesPageComponent, pathMatch:'full'},
  {path:'mesCommandes/:id', component: CommandeComponent, pathMatch:'full'},
  {path:'connexion', component: ConnexionPageComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
