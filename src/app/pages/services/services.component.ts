import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, ServiceCardComponent, CtaSectionComponent],
  template: `
    <main class="services-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().services.heroBadge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().services.heroTitle }} <span class="text-gradient">{{ ts.t().services.heroTitleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().services.heroLead }}
          </p>

          <!-- Quick Jump Navigation Pills -->
          <div class="quick-jump-bar">
            <span class="jump-label">{{ ts.t().services.jumpLabel }}:</span>
            <div class="jump-pills">
              <a [routerLink]="['/services']" fragment="technology-services" class="jump-pill jump-category">
                <span>⚡ Technology Services</span>
              </a>
              <a [routerLink]="['/services']" fragment="digital-marketing" class="jump-pill jump-category marketing-jump">
                <span>🚀 Digital Marketing</span>
              </a>
              <a *ngFor="let s of ts.t().data.servicesList" [routerLink]="['/services']" [fragment]="s.id" class="jump-pill">
                <span>{{ s.title }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 1. Technology Services Grid -->
      <section class="section-padding services-grid-section" id="technology-services">
        <div class="container">
          <div class="service-category-header">
            <div class="pill-badge">
              <span class="dot"></span>
              <span>{{ ts.t().services.techBadge || 'Core Capabilities' }}</span>
            </div>
            <h2 class="category-title">
              {{ ts.t().services.techTitle || 'Technology Services' }}
            </h2>
            <p class="category-subtitle">
              {{ ts.t().services.techSubtitle || 'Enterprise-grade software, cloud infrastructure, and data systems engineered for performance and security.' }}
            </p>
          </div>

          <div class="grid-2 services-container-grid">
            <app-service-card *ngFor="let s of techServices" [service]="s"></app-service-card>
          </div>
        </div>
      </section>

      <!-- 2. Digital Marketing Services Grid -->
      <section class="section-padding marketing-grid-section" id="digital-marketing">
        <div class="container">
          <div class="service-category-header">
            <div class="pill-badge">
              <span class="dot"></span>
              <span>{{ ts.t().services.marketingBadge || 'Digital Marketing Services' }}</span>
            </div>
            <h2 class="category-title">
              {{ ts.t().services.marketingTitle || 'Digital Marketing Services' }}
            </h2>
            <p class="category-subtitle">
              {{ ts.t().services.marketingSubtitle || 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.' }}
            </p>
          </div>

          <div class="grid-2 services-container-grid">
            <app-service-card *ngFor="let s of marketingServices" [service]="s"></app-service-card>
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
        secondaryLink="/industries">
      </app-cta-section>
    </main>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ts = inject(TranslationService);

  private readonly marketingIds = [
    'digital-marketing',
    'seo-services',
    'social-media-marketing',
    'ppc-advertising',
    'email-marketing'
  ];

  get techServices() {
    const list = this.ts.t().data.servicesList || [];
    return list.filter(s => !this.marketingIds.includes(s.id));
  }

  get marketingServices() {
    const list = this.ts.t().data.servicesList || [];
    return list.filter(s => this.marketingIds.includes(s.id));
  }

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Services | Technology & Digital Marketing Solutions',
      description: 'DataSpire provides web application development, custom enterprise software, analytics & visualization, cloud infrastructure, and comprehensive digital marketing services (SEO, PPC, Social Media, Email Marketing).',
      keywords: 'Technology Services, Digital Marketing Services, SEO, PPC, Social Media Marketing, Email Marketing, Web App Development, Enterprise Software'
    });
  }
}
