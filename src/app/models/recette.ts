import { Process } from "./process";
import { Produit } from "./produit";
import { Theme } from "./theme";

export interface Recette {
    
    id:number,
    version:number,
    nom: string,
    nbConvives:number,
    process: Process,
    ingredients:Produit[],
    themes:Theme[],
    image?: File,
    rating?:number,
}
