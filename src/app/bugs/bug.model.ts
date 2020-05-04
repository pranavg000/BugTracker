import { Developer } from '../developers/developer.model';
import { Status, Priority } from './dataTypes/enums';
import { IBug } from './bug-temp.interface';



export class Bug {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    screenshot: string;
    developerID: string;
    developerName: string;
    dueDate: Date;

    constructor(obj: IBug) {
        Object.assign(this, obj);
    }

    assignDeveloper(developer: Developer) {
        this.developerID = developer.id;
        this.developerName = developer.fullName;
    }

    changeStatus(newStatus: Status) {
        this.status = newStatus;
    }

}