import { GenericRespose } from "./GenericResponse";

export interface AuthResponse extends GenericRespose {
    token: string;
    username: string;
}