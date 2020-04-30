import { Developer } from '../developers/developer.model';
import { Status, Priority } from './dataTypes/enums';

export class Bug {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    screenShot: string;
    developerID: string;
    developerName: string;

    constructor(id: string, title: string, description: string, status: Status, priority: Priority, screenShot: string = null, developerID: string = "", developerName: string = "") {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.screenShot = screenShot;
        this.developerID = developerID;
        this.developerName = developerName;
    }

    assignDeveloper(developer: Developer) {
        this.developerID = developer.id;
        this.developerName = developer.firstName + " " + developer.lastName;
    }

    changeStatus(newStatus: Status) {
        this.status = newStatus;
    }

}