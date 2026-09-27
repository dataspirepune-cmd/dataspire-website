import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'DataSpire | Data, Technology & Digital Transformation'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Technology With a Purpose | DataSpire'
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent),
    title: 'Solutions | Education, Staff HR & Banking Platforms | DataSpire'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Enterprise Engineering & Cloud Analytics | DataSpire'
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industries.component').then(m => m.IndustriesComponent),
    title: 'Industries | Specialized Sectors & Verticals | DataSpire'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers | Build the Future With DataSpire'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Let’s Build Something Better Together | DataSpire'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
