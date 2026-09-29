import { Routes } from '@angular/router';

import { Home } from './features/home/home/home';
import { Workshops } from './features/workshops/workshops/workshops';
import { Coaching } from './features/coaching/coaching/coaching';
import { Contact } from './features/contact/contact/contact';
import { AboutPage } from './features/about/about';
import { IndividuelleFormate } from './features/individuelle-formate/individuelle-formate';

import { TalenteGewinnen } from './features/services/TalenteGewinnen/TalenteGewinnen';
import { Vereinbarkeit } from './features/services/Vereinbarkeit/Vereinbarkeit';
import { FrauenFuehrung } from './features/services/FrauenFuehrung/FrauenFuehrung';
import { Gleichstellung } from './features/services/Gleichstellung/Gleichstellung';
import { Resilienz } from './features/services/Resilienz/Resilienz';
import { Demokratiefitness } from './features/services/Demokratiefitness/Demokratiefitness';

import { Impressum } from './features/Impressum/Impressum';
import { Datenschutz } from './features/Datenschutz/Datenschutz';

export const routes: Routes = [

  { path: 'home', component: Home },

  { path: 'workshops', component: Workshops },

  { path: 'individuelle-formate', component: IndividuelleFormate },

  { path: 'coaching', component: Coaching },

  { path: 'ueber-mich', component: AboutPage },

  { path: 'Impressum', component: Impressum },

  { path: 'Datenschutz', component: Datenschutz },

  { path: 'kontakt', component: Contact },

  { path: 'TalenteGewinnen', component: TalenteGewinnen },

  { path: 'Vereinbarkeit', component: Vereinbarkeit },

  { path: 'FrauenFuehrung', component: FrauenFuehrung },

  { path: 'gleichstellung', component: Gleichstellung },

  { path: 'Resilienz', component: Resilienz },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'demokratiefitness', component: Demokratiefitness },

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];