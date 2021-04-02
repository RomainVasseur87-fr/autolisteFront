import { Article } from "./article";

export interface Commande {
    id?:number,
    version?:number,
    nom: string,
    articles: Article[],
}
