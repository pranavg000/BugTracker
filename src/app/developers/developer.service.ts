import { Developer } from './developer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { IDeveloperTemp } from './developer-temp.interface';


@Injectable()
export class DeveloperService {
    developerDocRef: AngularFirestoreDocument<IDeveloperTemp>;
    fireStoreSubscription: Subscription;
    

    constructor(private firestore: AngularFirestore) {}
    
    async addNewDeveloper(value: IDeveloperTemp, id: string): Promise<string> {
        let ref = await this.firestore.collection('developers').doc(id).set(value);
        return id;
    }

    updateDeveloper(id: string, value: IDeveloperTemp) {
        this.firestore.doc('developers/'+id).set(value);
    }

    getDeveloper(id: string): Observable<IDeveloperTemp> {
        this.developerDocRef = this.firestore.doc('developers/'+id);
        return <Observable<IDeveloperTemp>> this.developerDocRef.valueChanges();
    }

    getDevelopers(): Observable<Developer[]> {
        return <Observable<Developer[]>> this.firestore.collection('developers').valueChanges({idField: 'id'});
    }

}