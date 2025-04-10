import { Component } from '@angular/core';
import {Company, Vacancy} from '../models';
import {CompanyService} from '../company.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {

  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    })
  }

  goToVacancies(companyId: number): void {
    this.router.navigate(['/companies', companyId, 'vacancies']);
  }
}
