import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { BugsComponent } from './bugs/bugs.component';
import { DeveloperStartComponent } from './developers/developer-start/developer-start.component';
import { DeveloperComponent } from './developers/developer/developer.component';
import { DeveloperEditComponent } from './developers/developer-edit/developer-edit.component';
import { BugsListComponent } from './bugs/bugs-list/bugs-list.component';
import { BugListItemComponent } from './bugs/bugs-list/bug-list-item/bug-list-item.component';
import { BugAssignComponent } from './bugs/bug-assign/bug-assign.component';
import { BugEditComponent } from './bugs/bug-edit/bug-edit.component';
import { BugComponent } from './bugs/bug/bug.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent, children: [
        {path: '', component: DeveloperStartComponent},
        {path: 'new', component: DeveloperEditComponent},
        {path: ':id', component: DeveloperComponent},
        {path: ':id/edit', component: DeveloperEditComponent},
    ]},
    { path: 'bugs', component: BugsComponent, children:[
        {path: '', component: BugsListComponent},
        {path: 'new', component: BugEditComponent},
        {path: ':id', component: BugComponent},
        {path: ':id/assigndev', component: BugAssignComponent},
        {path: ':id/changestatus', component: BugEditComponent},
    ] },
]

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
], 
exports: [
    RouterModule
]   
})
export class AppRoutingModule {

}