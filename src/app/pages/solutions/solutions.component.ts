import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SolutionCardComponent } from '../../shared/components/solution-card/solution-card.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, SolutionCardComponent, CtaSectionComponent],
  template: `
    <main class="solutions-page">
      <!-- Solutions Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().solutions.heroBadge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().solutions.heroTitle }} <span class="text-gradient">{{ ts.t().solutions.heroTitleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().solutions.heroLead }}
          </p>

          <!-- Quick Jump Navigation Pills -->
          <div class="quick-jump-bar">
            <span class="jump-label">{{ ts.t().solutions.jumpLabel }}:</span>
            <div class="jump-pills">
              <a *ngFor="let pill of ts.t().solutions.jumpPills" [routerLink]="['/solutions']" [fragment]="pill.fragment" class="jump-pill">
                <span>{{ pill.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 1. DETAILED DOMAIN SUITES -->
      <section class="section-padding domain-suites-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().solutions.suitesBadge"
            [title]="ts.t().solutions.suitesTitle"
            [highlight]="ts.t().solutions.suitesTitleHighlight"
            [subtitle]="ts.t().solutions.suitesSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="domain-suites-stack">
            <!-- Loop through the 4 core domain solutions -->
            <div *ngFor="let suite of ts.t().data.domainSuites" class="glass-card domain-suite-card" [id]="suite.id">
              <div class="suite-header">
                <div class="suite-title-group">
                  <span class="suite-badge">{{ suite.badge }}</span>
                  <h2 class="suite-title">{{ suite.title }}</h2>
                  <span class="suite-subtitle">{{ suite.subtitle }}</span>
                </div>
                <div class="suite-customizable-tag">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  <span>{{ ts.t().solutions.customizableTag }}</span>
                </div>
              </div>

              <p class="suite-desc">{{ suite.description }}</p>

              <!-- Modules Grid -->
              <div class="modules-container">
                <h3 class="modules-heading">{{ ts.t().solutions.modulesHeading }}:</h3>
                <div class="modules-grid">
                  <div *ngFor="let mod of suite.modules" class="module-item">
                    <div class="mod-icon">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span>{{ mod }}</span>
                  </div>
                </div>
              </div>

              <!-- Key Benefits -->
              <div *ngIf="suite.benefits && suite.benefits.length" class="benefits-container">
                <h3 class="benefits-heading">{{ ts.t().solutions.benefitsHeading }}:</h3>
                <ul class="benefits-list">
                  <li *ngFor="let b of suite.benefits">
                    <span class="bullet"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>

              <!-- Action -->
              <div class="suite-action">
                <a routerLink="/contact" class="btn btn-primary">
                  <span>{{ ts.t().solutions.requestCustomizationBtn }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. CORE TECHNOLOGY CAPABILITIES -->
      <section class="section-padding core-capabilities-section" id="core-solutions">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().solutions.coreBadge"
            [title]="ts.t().solutions.coreTitle"
            [highlight]="ts.t().solutions.coreTitleHighlight"
            [subtitle]="ts.t().solutions.coreSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-4 core-grid">
            <app-solution-card *ngFor="let sol of ts.t().data.coreSolutions" [solution]="sol"></app-solution-card>
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
        secondaryLink="/services">
      </app-cta-section>
    </main>
  `,
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  ts = inject(TranslationService);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Solutions | Education, Staff HR & Cooperative Banking Solutions',
      description: 'Explore DataSpire customizable solutions for education management, staff & HR, small business operations, and multi-state cooperative banking MIS & reporting.',
      keywords: 'Education Management Solution, Staff HR Management, SMB Software, Cooperative Banking Solutions, MIS Reporting, Custom Software'
    });
  }
}
