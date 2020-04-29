import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DevelopersComponent } from './developers/developers.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'developers', component: DevelopersComponent }
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