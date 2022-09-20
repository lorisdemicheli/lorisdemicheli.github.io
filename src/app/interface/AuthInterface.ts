import { GenericResposeInterface } from "./GenericResponseInterface";

export interface AuthInterface extends GenericResposeInterface {
    token: string;
    username: string;
}