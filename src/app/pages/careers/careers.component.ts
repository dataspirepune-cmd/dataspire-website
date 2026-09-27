import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { COMPANY_INFO } from '../../shared/data/company.data';
import { JobPosition } from '../../shared/models/site.models';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, JobCardComponent, CtaSectionComponent],
  template: `
    <main class="careers-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().careers.heroBadge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().careers.heroTitle }} <span class="text-gradient">{{ ts.t().careers.heroTitleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().careers.heroLead }}
          </p>
        </div>
      </section>

      <!-- Culture / Why Work With Us -->
      <section class="section-padding culture-section">
        <div class="container">
          <div class="grid-3 culture-grid">
            <div *ngFor="let cult of ts.t().careers.cultureItems" class="glass-card cult-card">
              <div class="cult-icon">{{ cult.icon }}</div>
              <h3>{{ cult.title }}</h3>
              <p>{{ cult.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Roles Grid -->
      <section class="section-padding open-roles-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().careers.openingsBadge"
            [title]="ts.t().careers.openingsTitle"
            [highlight]="ts.t().careers.openingsTitleHighlight"
            [subtitle]="ts.t().careers.openingsSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-2 jobs-grid">
            <app-job-card 
              *ngFor="let job of ts.t().data.careerPositions" 
              [job]="job" 
              (apply)="openApplyModal($event)">
            </app-job-card>
          </div>
        </div>
      </section>

      <!-- Application Modal / Drawer -->
      <div *ngIf="selectedJob" class="modal-backdrop" (click)="closeApplyModal()">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closeApplyModal()">&times;</button>
          
          <div class="modal-header">
            <span class="pill-badge">{{ selectedJob.department }}</span>
            <h2>{{ ts.t().careers.applyModal.titlePrefix }} {{ selectedJob.title }}</h2>
            <p class="modal-sub">{{ selectedJob.location }} • {{ selectedJob.experience }}</p>
          </div>

          <div class="modal-body">
            <p class="apply-instructions">
              {{ ts.t().careers.applyModal.instructions }}
            </p>

            <div class="email-box">
              <span class="box-label">{{ ts.t().careers.applyModal.emailLabel }}</span>
              <a [href]="'mailto:' + company.contact.inquiries.careers + '?subject=Application for ' + selectedJob.title" class="career-mail-link">
                {{ company.contact.inquiries.careers }}
              </a>
            </div>

            <div class="tips-box">
              <strong>Tip:</strong> {{ ts.t().careers.applyModal.tip }}
            </div>
          </div>

          <div class="modal-actions">
            <a [href]="'mailto:' + company.contact.inquiries.careers + '?subject=Application for ' + selectedJob.title" class="btn btn-primary w-full">
              <span>{{ ts.t().careers.applyModal.openEmailBtn }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <app-cta-section
        [badge]="ts.t().home.ctaBadge"
        [title]="ts.t().home.ctaTitle"
        [description]="ts.t().home.ctaDesc"
        [primaryLabel]="ts.t().careers.applyModal.openEmailBtn"
        primaryLink="/contact"
        [secondaryLabel]="ts.t().home.ctaSecondaryBtn"
        secondaryLink="/about">
      </app-cta-section>
    </main>
  `,
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  ts = inject(TranslationService);
  company = COMPANY_INFO;
  selectedJob: JobPosition | null = null;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Careers | Build the Future With DataSpire',
      description: 'Explore engineering, data analysis, UI/UX design, cloud and QA career opportunities at DataSpire Pune.',
      keywords: 'DataSpire Careers, Frontend Developer, Backend Developer, Data Analyst, Cloud DevOps Engineer, Pune Tech Jobs'
    });
  }

  openApplyModal(job: JobPosition): void {
    this.selectedJob = job;
  }

  closeApplyModal(): void {
    this.selectedJob = null;
  }
}
