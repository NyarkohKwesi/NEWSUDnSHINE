import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Packages } from './components/packages/packages';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Booking } from './components/booking/booking';

export const routes: Routes = [
    { path: '', component: Home},
  { path: 'packages', component: Packages},
  { path: 'about', component: About},
  { path: 'contact', component: Contact},
  { path: 'booking', component: Booking},
  { path: '**', redirectTo: '' }
];
