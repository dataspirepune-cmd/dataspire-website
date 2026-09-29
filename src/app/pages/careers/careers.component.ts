import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { COMPANY_INFO } from '../../shared/data/company.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, CtaSectionComponent],
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

      <!-- Hiring Status / No Current Openings Section -->
      <section class="section-padding no-openings-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().careers.noOpeningsBadge || 'Hiring Status'"
            [title]="ts.t().careers.noOpeningsTitle || 'Currently No Openings or'"
            [highlight]="ts.t().careers.noOpeningsTitleHighlight || 'Active Hirings'"
            [subtitle]="ts.t().careers.noOpeningsSubtitle || 'We do not have any open vacancies or active hiring positions at this time.'"
            [centered]="true">
          </app-section-heading>

          <div class="glass-card no-openings-card">
            <div class="no-openings-icon-badge">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            
            <h3 class="no-openings-headline">
              {{ ts.t().careers.noOpeningsTitle || 'Currently No Openings or Active Hirings' }}
            </h3>

            <p class="no-openings-text">
              {{ ts.t().careers.noOpeningsDesc || 'Our team is currently at full capacity. We sincerely thank you for your interest in joining DataSpire. While there are no current openings, we always welcome exceptional talent. You are invited to send your resume for future opportunities, and our recruitment team will reach out when a suitable position becomes available.' }}
            </p>

            <div class="future-resume-box">
              <div class="future-resume-info">
                <span class="box-label">{{ ts.t().careers.noOpeningsNote || 'Future Opportunities & General Submissions:' }}</span>
                <a [href]="'mailto:' + company.contact.inquiries.careers + '?subject=Resume Submission - Future Opportunities'" class="career-mail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>{{ company.contact.inquiries.careers }}</span>
                </a>
              </div>
              <a [href]="'mailto:' + company.contact.inquiries.careers + '?subject=Resume Submission - Future Opportunities'" class="btn btn-primary btn-lg">
                <span>{{ ts.t().careers.futureOpportunitiesBtn || 'Send Resume for Future Openings' }}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <app-cta-section
        [badge]="ts.t().home.ctaBadge"
        [title]="ts.t().home.ctaTitle"
        [description]="ts.t().home.ctaDesc"
        [primaryLabel]="ts.t().home.ctaPrimaryBtn"
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

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Careers | Life & Opportunities at DataSpire',
      description: 'Learn about culture and future opportunities at DataSpire. While there are currently no active openings, we welcome future resume submissions.',
      keywords: 'DataSpire Careers, Software Engineering Culture, Future Tech Opportunities, Pune Tech'
    });
  }
}
