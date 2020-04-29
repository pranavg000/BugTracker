import { Developer } from './developer.model';

export class DeveloperService {
    developers: Developer[] = [
        new Developer("Pranav", "Gupta", "pg000@gm.com"), 
        new Developer("Max", "Bansal", "mx000@gm.com")
    ];

    constructor() {}
    
    addNewDeveloper(developer: Developer): number {
        return this.developers.push(developer) - 1;
    }

    updateDeveloper(id: number, formValue: {}){
        this.developers[id].update(formValue);
    }

}