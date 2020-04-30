import { Injectable } from '@angular/core';
import { Bug } from './bug.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subscription, Subject, Observable } from 'rxjs';
import { IBugTemp } from './bug-temp.interface';

@Injectable()
export class BugService {
    bugs: Bug[];
    fireStoreSubscription: Subscription;
    bugsChanged = new Subject<Bug[]>();
    bugDocRef: AngularFirestoreDocument<IBugTemp>;

    constructor(private firestore: AngularFirestore) {
        this.fireStoreSubscription = this.firestore.collection('bugs').valueChanges({idField: 'id'}).subscribe((data: Bug[]) => {
            this.bugs = data;
            this.bugsChanged.next(this.bugs);
        });
    }

    async addNewBug(value: IBugTemp): Promise<string> {
        let ref = await this.firestore.collection('bugs').add(value);
        return ref.id;
    }

    updateBug(id: string, value: IBugTemp) {
        this.bugDocRef.set(value);
    }

    getBug(id: string): Observable<IBugTemp> {
        this.bugDocRef = this.firestore.doc('bugs/'+id);
        return <Observable<IBugTemp>> this.bugDocRef.valueChanges();
    }

    getBugs(): Bug[] {
        return this.bugs;
    }

    deleteBug(id: string): void {
        this.bugDocRef.delete();
    }


}