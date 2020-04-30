import { Bug } from 'src/app/bugs/bug.model';

export class Developer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(id: string, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    assignNewBug(bug: Bug) {
        // this.bugsAssigned.push(bug);
    }

    removeBug(index: number) {
        // if(index < this.bugsAssigned.length)
        //     this.bugsAssigned.splice(index, 1);
    }

    update(value: {}){
        this.firstName = value['firstName'];
        this.lastName = value['lastName'];
        this.email = value['email'];
    }
}

