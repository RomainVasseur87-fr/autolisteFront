import { Adresse } from "./adresse";
import { Recette } from "./recette";
import { Role } from "./role";


export interface Utilisateur {

    username: string,
    password: string,
    enable: boolean,
    role: Role,
    adresse: Adresse,
    recettes: Recette[],
   

}
