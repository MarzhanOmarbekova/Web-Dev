import { Routes } from '@angular/router';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {CompanyListComponent} from './company-list/company-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id/vacancies', component: VacancyListComponent },
];
