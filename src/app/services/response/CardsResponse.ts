import { Card } from "../../interface/Card";
import { GenericRespose } from "./GenericResponse";

export interface CardsResponse extends GenericRespose {
    cards: Card[];
}