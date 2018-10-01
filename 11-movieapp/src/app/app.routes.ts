import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: 'detail/:id/:page/:query', component: DetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);