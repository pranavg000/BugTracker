import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DeveloperListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DeveloperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
