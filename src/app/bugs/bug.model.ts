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

    // constructor(id: string, title: string, description: string, status: Status, priority: Priority, screenShot: string = null, developerID: string = "", developerName: string = "") {
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.status = status;
    //     this.priority = priority;
    //     this.screenShot = screenShot;
    //     this.developerID = developerID;
    //     this.developerName = developerName;
    // }

    constructor(obj: IBug) {
        Object.assign(this, obj);
        // this.id = obj.id;
        // this.title = obj.title;
        // this.description = obj.description;
        // this.status = obj.status;
        // this.priority = obj.priority;
        // this.screenShot = obj.screenShot;
        // this.developerID = obj.developerID;
        // this.developerName = obj.developerName;
    }

    assignDeveloper(developer: Developer) {
        this.developerID = developer.id;
        this.developerName = developer.firstName + " " + developer.lastName;
    }

    changeStatus(newStatus: Status) {
        this.status = newStatus;
    }

}