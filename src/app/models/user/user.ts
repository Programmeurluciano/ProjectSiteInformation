export class User {
    userName: string;
    password: string;
    roles: string[];
    constructor(userName: string,password: string, roles: string[]) {
        this.userName = userName;
        this.password = password;
        this.roles  = roles;
    }
}
