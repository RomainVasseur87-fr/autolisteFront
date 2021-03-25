import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Commons/header/header.component';
import { FooterComponent } from './Commons/footer/footer.component';
import { AcceuilPageComponent } from './acceuil-page/acceuil-page.component';
import { MesRecettesPageComponent } from './mes-recettes-page/mes-recettes-page.component';
import { MesPaniersPageComponent } from './mes-paniers-page/mes-paniers-page.component';
import { MesCommandesPageComponent } from './mes-commandes-page/mes-commandes-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { UtilisateurPageComponent } from './utilisateur-page/utilisateur-page.component';
import { UtilisateurComponent } from './utilisateur-page/utilisateur/utilisateur.component';
import { RecetteComponent } from './mes-recettes-page/recette/recette.component';
import { PanierComponent } from './mes-paniers-page/panier/panier.component';
import { CommandeComponent } from './mes-commandes-page/commande/commande.component';
import { UtilisateurFormComponent } from './utilisateur-page/utilisateur-form/utilisateur-form.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilPageComponent,
    MesRecettesPageComponent,
    RecetteComponent,
    MesPaniersPageComponent,
    PanierComponent,
    MesCommandesPageComponent,
    CommandeComponent,
    ConnexionPageComponent,
    UtilisateurPageComponent,
    UtilisateurComponent,
    UtilisateurFormComponent,
    ProduitComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
