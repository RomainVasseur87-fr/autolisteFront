import { Produit } from "./produit";

export interface Panier {
    id:number,
    version:number,
    nom: string,
    produits: Produit[],
}
