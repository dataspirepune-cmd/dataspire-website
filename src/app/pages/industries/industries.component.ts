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
