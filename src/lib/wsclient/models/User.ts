
export class User {
    public email: string
    public password: string
    public roles: string[]

    constructor ( init?: Partial<User> ) {
         
        Object.assign( this, init )
    }

}
