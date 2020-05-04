import { Injectable } from '@angular/core';
import { Bug } from './bug.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IBugTemp, IBug } from './bug-temp.interface';
import { Developer } from '../developers/developer.model';

@Injectable()
export class BugService {
    bugs: Bug[];
    bugDocRef: AngularFirestoreDocument<IBugTemp>;

    constructor(private firestore: AngularFirestore) { }

    async addNewBug(value: IBugTemp): Promise<string> {
        let ref = await this.firestore.collection('bugs').add(value);
        return ref.id;
    }

    updateBug(statChanged: boolean, devAssigned: boolean, newStat: number, dev: Developer, date: string) {
        let newData = {};
        if(statChanged) newData['status'] = newStat;
        if(devAssigned) { newData['developerID'] = dev.id; newData['developerName'] = dev.fullName; newData['dueDate'] = date; }
        if(newData)
            this.bugDocRef.update(newData);
    }

    getBug(id: string): Observable<IBugTemp> {
        this.bugDocRef = this.firestore.doc('bugs/'+id);
        return <Observable<IBugTemp>> this.bugDocRef.valueChanges();
    }

    getBugs(): Observable<IBug[]> {
        return <Observable<IBug[]>> this.firestore.collection('bugs').valueChanges({idField: 'id'});
    }

    deleteBug(id: string): void {
        this.firestore.doc('bugs/'+id).delete();
    }

    getBugsDev(devID: string) {
        return <Observable<Bug[]>> this.firestore.collection('bugs', ref => ref.where('developerID', '==', devID)).valueChanges({idField: 'id'});
    }


}