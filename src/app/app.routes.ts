import { Routes } from '@angular/router';
import { ResourcesComponent } from './pages/resources/resources.component';

export const routes: Routes = [

    { path: 'resources', component: ResourcesComponent },
    { path: '', redirectTo: 'resources', pathMatch: 'full' },
    { path: '**', redirectTo: 'resources' }
];
