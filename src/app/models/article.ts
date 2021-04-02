import { Magasin } from "./magasin";

export interface Article {
    id:number,
    version:number,
    nom: string,
    conditionement: number,
    prix:number,
    magasin:Magasin,
}
