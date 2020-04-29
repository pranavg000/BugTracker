import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';
import { BugsComponent } from './bugs/bugs.component';
import { DeveloperStartComponent } from './developers/developer-start/developer-start.component';
import { DeveloperComponent } from './developers/developer/developer.component';
import { DeveloperEditComponent } from './developers/developer-edit/developer-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent , children: [
        {path: '', component: DeveloperStartComponent},
        {path: 'new', component: DeveloperEditComponent},
        {path: ':id', component: DeveloperComponent},
        {path: ':id/edit', component: DeveloperEditComponent},
    ]},
    { path: 'bugs', component: BugsComponent },
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