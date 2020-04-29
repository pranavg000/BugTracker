import { Bug } from 'src/app/bugs/bug/bug.model';

export class Developer {
    firstName: string;
    lastName: string;
    email: string;
    bugsAssigned: Bug[];

    constructor(firstName: string, lastName: string, email: string, bugsAssigned: Bug[] = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bugsAssigned = bugsAssigned;
    }

    assignNewBug(bug: Bug) {
        this.bugsAssigned.push(bug);
    }

    removeBug(index: number) {
        if(index < this.bugsAssigned.length)
            this.bugsAssigned.splice(index, 1);
    }

    update(value: {}){
        this.firstName = value['firstName'];
        this.lastName = value['lastName'];
        this.email = value['email'];
    }
}

