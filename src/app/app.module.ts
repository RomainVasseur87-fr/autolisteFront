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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilPageComponent,
    MesRecettesPageComponent,
    MesPaniersPageComponent,
    MesCommandesPageComponent,
    ConnexionPageComponent,
    UtilisateurPageComponent,
    UtilisateurComponent,
    RecetteComponent,
    PanierComponent
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
