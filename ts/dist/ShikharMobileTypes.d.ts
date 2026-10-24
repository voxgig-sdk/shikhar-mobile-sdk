export interface Authentication {
    message?: string;
    mobile: string;
    password: string;
    success?: boolean;
    token?: string;
    user?: Record<string, any>;
    verificationId?: string;
}
export interface AuthenticationCreateData {
    mobile: string;
    password: string;
}
