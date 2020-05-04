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
import { BugEditComponent } from './bugs/bug-edit/bug-edit.component';
import { BugComponent } from './bugs/bug/bug.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DeveloperEditGuard } from './developers/developer-edit/dev-edit-guard.service';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }, children: [
        {path: '', component: DeveloperStartComponent},
        {path: ':id', component: DeveloperComponent},
        {path: ':id/edit', component: DeveloperEditComponent, canActivate: [DeveloperEditGuard]},
    ]},
    { path: 'bugs', component: BugsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },  children:[
        {path: '', component: BugsListComponent},
        {path: 'new', component: BugEditComponent},
        {path: ':id', component: BugComponent},
    ] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},

    
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