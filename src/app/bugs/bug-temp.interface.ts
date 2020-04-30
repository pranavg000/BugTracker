import { Status, Priority } from './dataTypes/enums';

export class IBugTemp {
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    screenShot: string;
    developerID: string;
    developerName: string;
}