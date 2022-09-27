import { GenericRespose } from "./GenericResponse";

export interface QrCodeResponse extends GenericRespose {
    code: String;
}