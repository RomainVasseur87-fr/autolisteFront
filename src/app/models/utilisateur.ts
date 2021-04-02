import { Adresse } from "./adresse";
import { Recette } from "./recette";
import { Role } from "./role";


export interface Utilisateur {

    id?: number;
    nom?: string,
    prenom: string,
    email: string,
    type: Role,
    adresse: Adresse,
    recettes: Recette[],
   

}
