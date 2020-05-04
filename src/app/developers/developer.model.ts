import { Bug } from 'src/app/bugs/bug.model';

export class Developer {
    id: string;
    fullName: string;
    email: string;

    constructor(id: string, fullName: string, email: string) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
    }
}

