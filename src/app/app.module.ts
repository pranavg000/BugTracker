import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperComponent } from './developers/developer/developer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BugsComponent } from './bugs/bugs.component';
import { BugComponent } from './bugs/bug/bug.component';
import { DeveloperListComponent } from './developers/developer-list/developer-list.component';
import { DeveloperStartComponent } from './developers/developer-start/developer-start.component';
import { DeveloperEditComponent } from './developers/developer-edit/developer-edit.component';
import { DeveloperListItemComponent } from './developers/developer-list/developer-list-item/developer-list-item.component';
import { DeveloperService } from './developers/developer.service';
import { FormsModule } from '@angular/forms';
import { BugListItemComponent } from './bugs/bugs-list/bug-list-item/bug-list-item.component';
import { BugEditComponent } from './bugs/bug-edit/bug-edit.component';
import { BugService } from './bugs/bug.service';
import { BugsListComponent } from './bugs/bugs-list/bugs-list.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DeveloperEditGuard } from './developers/developer-edit/dev-edit-guard.service';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperComponent,
    HomeComponent,
    BugsComponent,
    BugComponent,
    DeveloperListComponent,
    DeveloperStartComponent,
    DeveloperEditComponent,
    DeveloperListItemComponent,
    BugListItemComponent,
    BugEditComponent,
    BugsListComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [DeveloperService, BugService, AuthService, DeveloperEditGuard, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
