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
              <a *ngFor="let s of ts.t().data.servicesList" [routerLink]="['/services']" [fragment]="s.id" class="jump-pill">
                <span>{{ s.title }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="section-padding services-grid-section">
        <div class="container">
          <div class="grid-2 services-container-grid">
            <app-service-card *ngFor="let s of ts.t().data.servicesList" [service]="s"></app-service-card>
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

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Services | Enterprise Software, Web Development & Analytics',
      description: 'DataSpire provides web application development, custom enterprise software, analytics & visualization, cloud infrastructure, API integration, and ongoing support.',
      keywords: 'Web App Development, Enterprise Software, Data Analytics, Cloud Infrastructure, API Integration, Database Solutions, Automation Services, Maintenance & Support'
    });
  }
}
