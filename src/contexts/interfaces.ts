export interface IAuth {
    user: any;
    auth: boolean;
    error: string;
    loading: boolean | null;
    signIn: (username: string, pwd: string) => void;
    signOut: () => void;
}