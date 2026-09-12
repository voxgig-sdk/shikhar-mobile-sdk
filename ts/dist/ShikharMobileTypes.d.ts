export interface Authentication {
    id?: string;
    message?: string;
    mobile?: string;
    name?: string;
    password: string;
    success?: boolean;
    verificationId?: string;
}
export interface AuthenticationCreateData {
    id?: string;
    message?: string;
    mobile?: string;
    name?: string;
    password: string;
    success?: boolean;
    verificationId?: string;
}
