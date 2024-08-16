import { Route, Routes } from '@angular/router';
import { COMPANY_NAME } from './company-information';

export interface RouteWrapper {
    route: Route,
    name?: string,
}

export const wrappedRoutes: RouteWrapper[] = [
    {
        route: { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent), title: COMPANY_NAME },
        name: 'Főoldal',
    },
    {
        route: { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent), title: 'Rólunk' },
        name: 'Rólunk',
    },
    {
        route: { path: 'services', loadComponent: () => import('./services/services.component').then(c => c.ServicesComponent), title: 'Szolgáltatásaink' },
        name: 'Szolgáltatásaink',
    },
    {
        route: { path: 'contact', loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent), title: 'Kapcsolat' },
        name: 'Kapcsolat',
    },
    {
        route: { path: 'project', loadComponent: () => import('./project/project.component').then(c => c.ProjectComponent), title: 'Projektek' },
        name: 'Projektek',
    },
    {
        route: { path: 'faq', loadComponent: () => import('./faq/faq.component').then(c => c.FaqComponent), title: 'Kérdések' },
        name: 'Kérdéseg',
    },
    {
        route: { path: '**', redirectTo: 'home', title: COMPANY_NAME },
    },
];

export const routes: Routes = wrappedRoutes
    .map((route: RouteWrapper) => route.route);