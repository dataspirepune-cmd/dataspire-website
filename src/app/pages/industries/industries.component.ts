import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { IndustryCardComponent } from '../../shared/components/industry-card/industry-card.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, IndustryCardComponent, CtaSectionComponent],
  template: `
    <main class="industries-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().industries.heroBadge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().industries.heroTitle }} <span class="text-gradient">{{ ts.t().industries.heroTitleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().industries.heroLead }}
          </p>

          <!-- Quick Jump Navigation Pills -->
          <div class="quick-jump-bar">
            <span class="jump-label">{{ ts.t().industries.jumpLabel }}:</span>
            <div class="jump-pills">
              <a *ngFor="let ind of ts.t().data.industriesList" [routerLink]="['/industries']" [fragment]="ind.id" class="jump-pill">
                <span>{{ ind.title }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Industries Grid -->
      <section class="section-padding industries-main-section">
        <div class="container">
          <div class="grid-3 industries-cards-grid">
            <app-industry-card *ngFor="let ind of ts.t().data.industriesList" [industry]="ind"></app-industry-card>
          </div>
        </div>
      </section>

      <!-- Digital Marketing for Industries Section -->
      <section class="section-padding industry-marketing-section" id="digital-marketing-industries">
        <div class="container">
          <div class="glass-card industry-marketing-card">
            <div class="marketing-badge-row">
              <div class="pill-badge">
                <span class="dot"></span>
                <span>{{ ts.t().industries.marketingBadge || 'Digital Marketing Services' }}</span>
              </div>
            </div>
            
            <div class="industry-marketing-header">
              <h2 class="marketing-headline">
                {{ ts.t().industries.marketingTitle || 'Digital Marketing Services' }}
              </h2>
              <p class="marketing-tagline text-gradient">
                {{ ts.t().industries.marketingSubtitle || 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.' }}
              </p>
              <p class="marketing-intro">
                {{ ts.t().industries.marketingDesc || 'From software solutions to targeted digital outreach, DataSpire supports educational institutions, schools, colleges, small & medium businesses, and organizations with specialized digital growth strategies.' }}
              </p>
            </div>

            <div class="grid-3 marketing-sectors-grid">
              <div class="sector-marketing-box">
                <div class="box-icon edu-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <h3>Schools, Colleges & Universities</h3>
                <p>Digital admissions campaigns, entrance exam outreach, academic program visibility, and institutional reputation management across digital channels.</p>
                <ul class="sector-points">
                  <li>Student admissions lead generation</li>
                  <li>Online reputation & alumni engagement</li>
                  <li>Google search & social discovery</li>
                </ul>
              </div>

              <div class="sector-marketing-box">
                <div class="box-icon smb-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <h3>Small & Medium Businesses (SMBs)</h3>
                <p>Commercial lead acquisition, targeted Google Ads & PPC campaigns, local search optimization, and automated customer communication.</p>
                <ul class="sector-points">
                  <li>High-intent customer inquiry generation</li>
                  <li>Targeted PPC & Social Media ad ROI</li>
                  <li>Email marketing & repeat sales nurturing</li>
                </ul>
              </div>

              <div class="sector-marketing-box">
                <div class="box-icon org-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3>Organizations & Professional Services</h3>
                <p>Brand authority building, thought leadership content, search engine presence, and omni-channel stakeholder communication campaigns.</p>
                <ul class="sector-points">
                  <li>B2B credibility & search authority</li>
                  <li>Executive newsletters & email campaigns</li>
                  <li>Measurable performance reporting</li>
                </ul>
              </div>
            </div>

            <div class="marketing-cta-footer">
              <a [routerLink]="['/services']" [fragment]="'digital-marketing'" class="btn btn-primary btn-lg">
                <span>Explore Digital Marketing Services</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Sector Comparison Strip -->
      <section class="section-padding sector-insights-section">
        <div class="container">
          <div class="glass-card insights-card">
            <div class="insights-header">
              <span class="pill-badge">{{ ts.t().industries.insightsBadge }}</span>
              <h2 class="insights-title">{{ ts.t().industries.insightsTitle }}</h2>
              <p class="insights-desc">
                {{ ts.t().industries.insightsDesc }}
              </p>
            </div>

            <div class="grid-3 insights-grid">
              <div *ngFor="let item of ts.t().industries.insightsList" class="insight-box">
                <div class="box-num">{{ item.num }}</div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
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
        secondaryLink="/solutions">
      </app-cta-section>
    </main>
  `,
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  ts = inject(TranslationService);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Industries | Education, HR, SMBs & Cooperative Banking',
      description: 'Discover how DataSpire powers digital transformation for schools, universities, staff & HR teams, small businesses, and multi-state cooperative banks.',
      keywords: 'Education Technology, School ERP, University Management, Cooperative Banking MIS, Staff Management, Small Business Analytics'
    });
  }
}
