export interface User {
    email: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    birthday?: string;
    sub: number;
}