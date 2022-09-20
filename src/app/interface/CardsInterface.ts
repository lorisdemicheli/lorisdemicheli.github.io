import { CardInterface } from "./CardInterface";
import { GenericResposeInterface } from "./GenericResponseInterface";

export interface CardsInterface extends GenericResposeInterface {
    cards: CardInterface[];
}