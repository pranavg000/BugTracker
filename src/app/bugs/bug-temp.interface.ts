import { Status, Priority } from './dataTypes/enums';

export interface IBugTemp {
    title: string;
    description: string;
    status: number;
    priority: number;
    screenshot?: string;
    developerID: string;
    developerName: string;
}

export interface IBug {
    id: string;
    title: string;
    description: string;
    status: number;
    priority: number;
    screenshot?: string;
    developerID?: string;
    developerName?: string;
}