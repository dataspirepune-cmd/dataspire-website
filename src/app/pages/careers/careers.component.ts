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
                <a href="javascript:void(0)" (click)="openModal($event)" class="career-mail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>{{ company.contact.inquiries.careers }}</span>
                </a>
              </div>
              <button type="button" (click)="openModal()" class="btn btn-primary btn-lg">
                <span>{{ ts.t().careers.futureOpportunitiesBtn || 'Email Resume for Future Openings' }}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Future Resume Submission Modal -->
      <div *ngIf="showModal" class="modal-backdrop" (click)="closeModal()">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closeModal()" aria-label="Close modal">&times;</button>
          
          <div class="modal-header">
            <span class="pill-badge">Future Opportunities</span>
            <h2>Send Your Resume to DataSpire</h2>
            <p class="modal-sub">Choose your preferred method to connect with our talent team</p>
          </div>

          <div class="modal-body">
            <!-- Email Display with 1-Click Copy -->
            <div class="email-display-card">
              <div class="email-display-info">
                <span class="field-label">Careers Email:</span>
                <strong class="email-address">{{ company.contact.inquiries.careers }}</strong>
              </div>
              <button type="button" class="btn btn-outline btn-sm copy-btn" (click)="copyEmail()">
                <svg *ngIf="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <svg *ngIf="copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{{ copied ? 'Copied!' : 'Copy Email' }}</span>
              </button>
            </div>

            <!-- Action Buttons List -->
            <div class="modal-actions-list">
              <!-- Option 1: Open in Gmail Web -->
              <a [href]="gmailUrl" target="_blank" rel="noopener noreferrer" class="action-tile-btn gmail-btn">
                <div class="action-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.268H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.5l8.073-6.007c1.618-1.214 3.927-.059 3.927 1.964z"/>
                  </svg>
                </div>
                <div class="action-tile-text">
                  <strong>Open in Gmail (Web)</strong>
                  <span>Draft an email directly in your browser</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>

              <!-- Option 2: Default Mail App (mailto) -->
              <a [href]="mailtoUrl" class="action-tile-btn mail-client-btn">
                <div class="action-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div class="action-tile-text">
                  <strong>Open in Default Mail Client</strong>
                  <span>Use Outlook, Apple Mail or default app</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>

              <!-- Option 3: WhatsApp Support -->
              <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="action-tile-btn wa-btn">
                <div class="action-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div class="action-tile-text">
                  <strong>Chat on WhatsApp</strong>
                  <span>Message our recruitment team directly</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>

            <div class="tips-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>Please attach your latest CV (PDF), primary skills, and notice period in your message.</span>
            </div>
          </div>
        </div>
      </div>

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

  showModal = false;
  copied = false;

  get mailtoUrl(): string {
    const subject = encodeURIComponent('Resume Submission - Future Opportunities');
    const body = encodeURIComponent(
      'Dear DataSpire Recruitment Team,\n\nI would like to submit my resume for future engineering / analytics opportunities.\n\nPrimary Skills: \nYears of Experience: \nNotice Period: \nCurrent Location: \n\nPlease find my CV attached.\n\nThank you!'
    );
    return `mailto:${this.company.contact.inquiries.careers}?subject=${subject}&body=${body}`;
  }

  get gmailUrl(): string {
    const to = encodeURIComponent(this.company.contact.inquiries.careers);
    const su = encodeURIComponent('Resume Submission - Future Opportunities');
    const body = encodeURIComponent(
      'Dear DataSpire Recruitment Team,\n\nI would like to submit my resume for future engineering / analytics opportunities.\n\nPrimary Skills: \nYears of Experience: \nNotice Period: \nCurrent Location: \n\nPlease find my CV attached.\n\nThank you!'
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
  }

  get whatsappUrl(): string {
    const text = encodeURIComponent(
      'Hello DataSpire Team, I am interested in future career opportunities at DataSpire and would like to share my profile/resume.'
    );
    return `https://wa.me/${this.company.contact.whatsappNumber}?text=${text}`;
  }

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Careers | Life & Opportunities at DataSpire',
      description: 'Learn about culture and future opportunities at DataSpire. While there are currently no active openings, we welcome future resume submissions.',
      keywords: 'DataSpire Careers, Software Engineering Culture, Future Tech Opportunities, Pune Tech'
    });
  }

  openModal(e?: Event): void {
    if (e) {
      e.preventDefault();
    }
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.copied = false;
  }

  copyEmail(): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.company.contact.inquiries.careers).then(() => {
        this.copied = true;
        setTimeout(() => (this.copied = false), 2500);
      });
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = this.company.contact.inquiries.careers;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2500);
    }
  }
}
