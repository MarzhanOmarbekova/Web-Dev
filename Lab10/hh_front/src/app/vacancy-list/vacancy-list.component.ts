import { Component } from '@angular/core';
import {Vacancy} from '../models';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../company.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {

  vacancies: Vacancy[] = [];
  companyId: number = 0;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
              ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.companyId = Number(params.get('id'));
      this.companyService.getCompanyVacancies(this.companyId).subscribe(data => {
        this.vacancies = data;
      })
    })
  }
  backToCompanies(): void {
    this.router.navigate(['/companies']);
  }
}
