import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { COMPANY_INFO } from '../../shared/data/company.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, CtaSectionComponent],
  template: `
    <main class="about-page">
      <!-- About Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().about.badge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().about.title }} <span class="text-gradient">{{ ts.t().about.titleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().about.lead }}
          </p>
        </div>
      </section>

      <!-- Mission & Vision Cards -->
      <section class="section-padding mission-vision-section">
        <div class="container">
          <div class="grid-2 mission-vision-grid">
            <!-- Mission -->
            <div class="glass-card mv-card mission">
              <div class="mv-icon">🎯</div>
              <span class="mv-tag">{{ ts.t().about.missionTag }}</span>
              <h2 class="mv-title">{{ ts.t().about.missionTitle }}</h2>
              <p class="mv-desc">
                {{ ts.t().about.missionDesc }}
              </p>
            </div>

            <!-- Vision -->
            <div class="glass-card mv-card vision">
              <div class="mv-icon">🌐</div>
              <span class="mv-tag">{{ ts.t().about.visionTag }}</span>
              <h2 class="mv-title">{{ ts.t().about.visionTitle }}</h2>
              <p class="mv-desc">
                {{ ts.t().about.visionDesc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Executive Leadership Team -->
      <section class="section-padding leadership-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().about.leadershipBadge"
            [title]="ts.t().about.leadershipTitle"
            [highlight]="ts.t().about.leadershipTitleHighlight"
            [subtitle]="ts.t().about.leadershipSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="leadership-grid">
            <div *ngFor="let member of ts.t().data.leadershipTeam" class="leadership-card glass-card">
              <div class="member-image-wrapper">
                <img [src]="member.image" [alt]="member.name" class="member-image" loading="lazy" />
                <div class="image-gradient-overlay"></div>
                <div class="member-role-badge">
                  <span>{{ member.roleShort }}</span>
                </div>
              </div>

              <div class="member-info">
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-role-title">{{ member.role }}</p>
                <p class="member-bio">{{ member.bio }}</p>
                <div class="member-focus-tags">
                  <span *ngFor="let tag of member.focus" class="focus-pill">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Philosophy & Expertise -->
      <section class="section-padding philosophy-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().about.philBadge"
            [title]="ts.t().about.philTitle"
            [highlight]="ts.t().about.philTitleHighlight"
            [subtitle]="ts.t().about.philSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-3 philosophy-grid">
            <div *ngFor="let p of ts.t().about.principles" class="glass-card phil-card">
              <div class="phil-num">{{ p.num }}</div>
              <h3 class="phil-title">{{ p.title }}</h3>
              <p class="phil-desc">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Approach Roadmap -->
      <section class="section-padding approach-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().about.approachBadge"
            [title]="ts.t().about.approachTitle"
            [highlight]="ts.t().about.approachTitleHighlight"
            [subtitle]="ts.t().about.approachSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="timeline-wrapper">
            <div *ngFor="let step of ts.t().data.approachSteps; let i = index" class="timeline-item" [class.even]="i % 2 === 1">
              <div class="timeline-badge">
                <span>{{ step.step }}</span>
              </div>
              <div class="glass-card timeline-content">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.description }}</p>
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
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ts = inject(TranslationService);
  company = COMPANY_INFO;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'About Us | Technology With a Purpose',
      description: 'Learn about DataSpire - our mission, vision, engineering philosophy, and structured 6-step approach to digital transformation.',
      keywords: 'About DataSpire, Mission, Vision, Engineering Philosophy, Custom Software Development, Digital Transformation Partner'
    });
  }
}
