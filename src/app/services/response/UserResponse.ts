import { User } from "src/app/interface/User";
import { GenericRespose } from "./GenericResponse";

export interface UserResponse extends GenericRespose {
    user: User;
}