import { Categorie } from "./categorie";

export interface Produit {
    id?:number,
    version?:number,
    nom: string,
    quantite: number,
    categories: Categorie[],
}
