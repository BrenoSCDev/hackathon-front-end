export interface IAuth {
    user: any;
    auth: boolean;
    error: string;
    signIn: (username: string, pwd: string) => void;
}