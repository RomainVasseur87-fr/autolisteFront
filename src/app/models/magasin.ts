import { Adresse } from "./adresse";

export interface Magasin {
    id:number,
    version:number,
    nom: string,
    adresse: Adresse,
}
