import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Commons/header/header.component';
import { FooterComponent } from './Commons/footer/footer.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MesRecettesPageComponent } from './mes-recettes-page/mes-recettes-page.component';
import { MesCommandesPageComponent } from './mes-commandes-page/mes-commandes-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { UtilisateurPageComponent } from './utilisateur-page/utilisateur-page.component';
import { UtilisateurComponent } from './utilisateur-page/utilisateur/utilisateur.component';
import { RecetteComponent } from './mes-recettes-page/recette/recette.component';
import { PanierComponent } from './mes-paniers-page/panier/panier.component';
import { CommandeComponent } from './mes-commandes-page/commande/commande.component';
import { UtilisateurFormComponent } from './utilisateur-page/utilisateur-form/utilisateur-form.component';
import { ProduitComponent } from './produit/produit.component';
import { AccordionModule } from 'primeng/accordion';
import { TestComposantComponent } from './test-composant/test-composant.component'; //accordion and accordion tab
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { RecetteService } from './services/recette.service';
import { MesPaniersListComponent } from './mes-paniers-page/mes-paniers-list/mes-paniers-list.component';
import { InspirationPageComponent } from './inspiration-page/inspiration-page.component';
import { GeolocalisationPageComponent } from './geolocalisation-page/geolocalisation-page.component';
import { MesPaniersPageComponent } from './mes-paniers-page/mes-paniers-page.component';
import { FormProduitComponent } from './form-produit/form-produit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilPageComponent,
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
    TestComposantComponent,
    MesPaniersListComponent,
    InspirationPageComponent,
    GeolocalisationPageComponent,
    FormProduitComponent,

    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    EditorModule,
    ChipsModule,


  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
