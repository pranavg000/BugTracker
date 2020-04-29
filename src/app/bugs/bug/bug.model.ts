import { Developer } from 'src/app/developers/developer.model';

enum Status {
    "New" , "Under Review" , "Fixed" , "Spam",
}
enum Priority {
    "High" , "Medium" , "Low",
}

export class Bug {
    id: number;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    screenShot: string;
    developerAssigned: Developer;

    constructor(id: number, title: string, description: string, status: Status, priority: Priority, screenShot: string = null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.screenShot = screenShot;
        this.developerAssigned = null;
    }

    assignDeveloper(developer: Developer) {
        this.developerAssigned = developer;
    }

    changeStatus(newStatus: Status) {
        this.status = newStatus;
    }

}