import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { COMPANY_INFO } from '../../shared/data/company.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SolutionCardComponent } from '../../shared/components/solution-card/solution-card.component';
import { IndustryCardComponent } from '../../shared/components/industry-card/industry-card.component';
import { TechVisualComponent } from '../../shared/components/tech-visual/tech-visual.component';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionHeadingComponent,
    SolutionCardComponent,
    IndustryCardComponent,
    TechVisualComponent,
    CtaSectionComponent
  ],
  template: `
    <main class="home-page">
      <!-- 1. HERO SECTION -->
      <section class="hero-section">
        <div class="hero-ambient-glow"></div>
        
        <div class="container hero-container">
          <div class="hero-grid">
            <!-- Left Hero Content -->
            <div class="hero-content">
              <div class="pill-badge">
                <span class="dot"></span>
                <span>{{ ts.t().home.heroBadge }}</span>
              </div>

              <h1 class="hero-title">
                {{ ts.t().home.heroTitlePrefix }} <span class="text-gradient">{{ ts.t().home.heroTitleHighlight }}</span>
              </h1>

              <p class="hero-subheading">
                {{ ts.t().home.heroSubheading }}
              </p>

              <div class="hero-actions">
                <a routerLink="/solutions" class="btn btn-primary btn-lg">
                  <span>{{ ts.t().home.exploreSolutionsBtn }}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a routerLink="/contact" class="btn btn-secondary btn-lg">
                  <span>{{ ts.t().home.talkToUsBtn }}</span>
                </a>
              </div>

              <!-- Quick Highlights Bar -->
              <div class="hero-stats-strip">
                <div *ngFor="let stat of ts.t().data.companyStats" class="stat-pill">
                  <strong class="stat-value text-cyan">{{ stat.value }}</strong>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>

            <!-- Right Hero Visual Matrix -->
            <div class="hero-visual-col">
              <app-tech-visual></app-tech-visual>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. TRUSTED / CUSTOMER CATEGORIES SECTION -->
      <section class="section-padding trust-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().home.trustBadge"
            [title]="ts.t().home.trustTitle"
            [highlight]="ts.t().home.trustTitleHighlight"
            [subtitle]="ts.t().home.trustSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-4 trust-grid">
            <!-- Education Card -->
            <div class="glass-card trust-card">
              <div class="trust-icon-box edu">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3 class="trust-title">{{ ts.t().home.trustCards.edu.title }}</h3>
              <p class="trust-desc">{{ ts.t().home.trustCards.edu.desc }}</p>
              <a [routerLink]="['/solutions']" [fragment]="'education-management'" class="trust-link">
                <span>{{ ts.t().home.trustCards.edu.link }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>

            <!-- Staff & Admin Card -->
            <div class="glass-card trust-card">
              <div class="trust-icon-box staff">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 class="trust-title">{{ ts.t().home.trustCards.staff.title }}</h3>
              <p class="trust-desc">{{ ts.t().home.trustCards.staff.desc }}</p>
              <a [routerLink]="['/solutions']" [fragment]="'staff-hr-management'" class="trust-link">
                <span>{{ ts.t().home.trustCards.staff.link }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>

            <!-- SMB Card -->
            <div class="glass-card trust-card">
              <div class="trust-icon-box smb">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 class="trust-title">{{ ts.t().home.trustCards.smb.title }}</h3>
              <p class="trust-desc">{{ ts.t().home.trustCards.smb.desc }}</p>
              <a [routerLink]="['/solutions']" [fragment]="'small-business-solutions'" class="trust-link">
                <span>{{ ts.t().home.trustCards.smb.link }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>

            <!-- Cooperative Bank Card -->
            <div class="glass-card trust-card">
              <div class="trust-icon-box bank">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
              </div>
              <h3 class="trust-title">{{ ts.t().home.trustCards.bank.title }}</h3>
              <p class="trust-desc">{{ ts.t().home.trustCards.bank.desc }}</p>
              <a [routerLink]="['/solutions']" [fragment]="'cooperative-banking-solutions'" class="trust-link">
                <span>{{ ts.t().home.trustCards.bank.link }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. WHAT DATASPIRE DOES (VALUE PROP OVERVIEW) -->
      <section class="section-padding what-we-do-section">
        <div class="container">
          <div class="what-we-do-grid">
            <div class="what-we-do-text">
              <div class="pill-badge">
                <span class="dot"></span>
                <span>{{ ts.t().home.whatBadge }}</span>
              </div>
              <h2 class="section-title">
                {{ ts.t().home.whatTitle }} <span class="text-gradient">{{ ts.t().home.whatTitleHighlight }}</span>
              </h2>
              <p class="lead-text">
                {{ ts.t().home.whatLead }}
              </p>
              <p class="sub-text">
                {{ ts.t().home.whatSub }}
              </p>

              <div class="pillars-list">
                <div *ngFor="let pillar of ts.t().home.pillars" class="pillar-item">
                  <div class="pillar-bullet"></div>
                  <div>
                    <strong>{{ pillar.title }}</strong> {{ pillar.desc }}
                  </div>
                </div>
              </div>

              <div class="what-actions">
                <a routerLink="/about" class="btn btn-primary">
                  <span>{{ ts.t().home.whatBtn }}</span>
                </a>
              </div>
            </div>

            <div class="what-we-do-card-matrix">
              <div class="matrix-card top">
                <div class="metric-icon">📊</div>
                <div class="metric-info">
                  <strong>{{ ts.t().home.matrix.insights.title }}</strong>
                  <span>{{ ts.t().home.matrix.insights.desc }}</span>
                </div>
              </div>
              <div class="matrix-card middle">
                <div class="metric-icon">⚡</div>
                <div class="metric-info">
                  <strong>{{ ts.t().home.matrix.automation.title }}</strong>
                  <span>{{ ts.t().home.matrix.automation.desc }}</span>
                </div>
              </div>
              <div class="matrix-card bottom">
                <div class="metric-icon">🔒</div>
                <div class="metric-info">
                  <strong>{{ ts.t().home.matrix.security.title }}</strong>
                  <span>{{ ts.t().home.matrix.security.desc }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3.2. TEAM & COLLABORATIVE CULTURE SHOWCASE -->
      <section class="section-padding team-showcase-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().home.teamShowcase?.badge || 'Collaborative Excellence'"
            [title]="ts.t().home.teamShowcase?.title || 'Real People. Direct Collaboration.'"
            [highlight]="ts.t().home.teamShowcase?.titleHighlight || 'Measurable Impact'"
            [subtitle]="ts.t().home.teamShowcase?.subtitle || 'Technology succeeds when people collaborate seamlessly. Our multidisciplinary engineers, cloud architects, and data strategists work directly alongside your leadership from inception to deployment.'"
            [centered]="true">
          </app-section-heading>

          <div class="team-showcase-visual-wrapper">
            <div class="team-ambient-glow"></div>
            
            <div class="team-frame">
              <!-- Full Size Image Element -->
              <div class="team-image-viewport">
                <img
                  src="assets/images/team-collaboration.jpg"
                  alt="DataSpire Collaborative Engineering Team in Action"
                  class="team-img-full"
                  loading="lazy"
                />
                
                <!-- Modern Dark Vignette & Depth Gradients -->
                <div class="image-scrim-top"></div>
                <div class="image-scrim-bottom"></div>

                <!-- Floating Badge: Top Left -->
                <div class="floating-chip chip-squad">
                  <span class="live-pulse-dot"></span>
                  <div class="chip-text">
                    <strong>{{ ts.t().home.teamShowcase?.squadBadge || 'Agile Squad in Action' }}</strong>
                    <span>{{ ts.t().home.teamShowcase?.squadSub || 'Cross-functional sprint session' }}</span>
                  </div>
                </div>

                <!-- Floating Badge: Top Right -->
                <div class="floating-chip chip-location">
                  <div class="chip-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div class="chip-text">
                    <strong>{{ ts.t().home.teamShowcase?.locationBadge || 'Pune Innovation Center' }}</strong>
                    <span>{{ ts.t().home.teamShowcase?.locationSub || 'Serving clients nationwide' }}</span>
                  </div>
                </div>

                <!-- Floating Bottom Highlights Bar -->
                <div class="floating-highlights-bar">
                  <div class="highlight-item">
                    <span class="h-value text-gradient">{{ ts.t().home.teamShowcase?.statsSpecialists || '30+' }}</span>
                    <span class="h-label">{{ ts.t().home.teamShowcase?.statsSpecialistsLabel || 'Tech Specialists' }}</span>
                  </div>
                  <div class="h-separator"></div>
                  <div class="highlight-item">
                    <span class="h-value text-cyan">{{ ts.t().home.teamShowcase?.statsAccess || '100%' }}</span>
                    <span class="h-label">{{ ts.t().home.teamShowcase?.statsAccessLabel || 'Direct Engineering Access' }}</span>
                  </div>
                  <div class="h-separator"></div>
                  <div class="highlight-item">
                    <span class="h-value text-gradient">{{ ts.t().home.teamShowcase?.statsMethod || 'Sprint-Based' }}</span>
                    <span class="h-label">{{ ts.t().home.teamShowcase?.statsMethodLabel || 'Transparent Delivery' }}</span>
                  </div>
                  <div class="h-action">
                    <a routerLink="/about" class="btn btn-primary btn-sm">
                      <span>{{ ts.t().home.teamShowcase?.btnText || 'Meet Our Team' }}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3.5. TECHNOLOGY + DIGITAL GROWTH SECTION -->
      <section class="section-padding digital-growth-section">
        <div class="container">
          <div class="glass-card digital-growth-card">
            <div class="digital-growth-content">
              <div class="pill-badge">
                <span class="dot"></span>
                <span>{{ ts.t().home.digitalGrowthBadge || 'Digital Marketing Services' }}</span>
              </div>
              <h2 class="growth-title">
                {{ ts.t().home.digitalGrowthTitle || 'Technology + Digital Growth' }}
              </h2>
              <p class="growth-subtitle text-gradient">
                {{ ts.t().home.digitalGrowthSubtitle || 'Build your digital presence, reach the right audience, and turn online visibility into measurable growth.' }}
              </p>
              <p class="growth-text">
                {{ ts.t().home.digitalGrowthText || 'From software and data solutions to digital marketing, DataSpire helps organizations build better technology and strengthen their digital presence.' }}
              </p>
              <div class="growth-tags">
                <span class="growth-tag">Digital Marketing</span>
                <span class="growth-tag">SEO</span>
                <span class="growth-tag">Social Media Marketing</span>
                <span class="growth-tag">PPC</span>
                <span class="growth-tag">Email Marketing</span>
              </div>
              <div class="growth-actions">
                <a [routerLink]="['/services']" [fragment]="'digital-marketing'" class="btn btn-primary btn-lg">
                  <span>{{ ts.t().home.digitalGrowthBtn || 'Explore Digital Marketing' }}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
            <div class="digital-growth-visual">
              <div class="growth-card-item">
                <div class="growth-icon-circle">🚀</div>
                <div class="growth-item-info">
                  <strong>Digital Visibility & SEO</strong>
                  <span>Keyword optimization, search ranking & organic traffic</span>
                </div>
              </div>
              <div class="growth-card-item">
                <div class="growth-icon-circle">🎯</div>
                <div class="growth-item-info">
                  <strong>PPC & Targeted Leads</strong>
                  <span>High-ROI advertising campaigns on search & social channels</span>
                </div>
              </div>
              <div class="growth-card-item">
                <div class="growth-icon-circle">📈</div>
                <div class="growth-item-info">
                  <strong>Social Media & Email</strong>
                  <span>Audience engagement, brand promotion & automated nurture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. CORE SOLUTIONS SLIDER -->
      <section class="section-padding solutions-overview-section">
        <div class="container">
          <div class="section-heading-with-controls">
            <app-section-heading
              [badge]="ts.t().home.solutionsBadge"
              [title]="ts.t().home.solutionsTitle"
              [highlight]="ts.t().home.solutionsTitleHighlight"
              [subtitle]="ts.t().home.solutionsSubtitle"
              [centered]="false">
            </app-section-heading>

            <!-- Top Slider Controls -->
            <div class="slider-header-actions">
              <div class="slider-live-badge">
                <span class="live-dot" [class.paused]="isSolPaused"></span>
                <span>{{ isSolPaused ? 'Paused' : 'Auto-Looping' }}</span>
              </div>
              <div class="slider-btn-group">
                <button class="slider-nav-btn" (click)="prevSol()" aria-label="Previous Solutions" title="Previous Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="slider-nav-btn" (click)="nextSol()" aria-label="Next Solutions" title="Next Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Slider Viewport and Track -->
          <div class="carousel-slider-wrapper" 
               (mouseenter)="pauseSol()" 
               (mouseleave)="resumeSol()"
               (touchstart)="onTouchStart($event)"
               (touchend)="onTouchEnd($event, 'sol')">
            
            <!-- Side Navigation Arrows -->
            <button class="side-arrow arrow-prev" (click)="prevSol()" aria-label="Previous Slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="side-arrow arrow-next" (click)="nextSol()" aria-label="Next Slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <div class="carousel-viewport">
              <div class="carousel-track" 
                   [class.no-transition]="solNoTransition"
                   [style.transform]="'translate3d(' + solTranslateX + ', 0, 0)'"
                   (transitionend)="onSolTransitionEnd()">
                <div *ngFor="let sol of displaySolutions; let idx = index" class="carousel-slide sol-slide">
                  <app-solution-card [solution]="sol"></app-solution-card>
                </div>
              </div>
            </div>

            <!-- Bottom Pagination Dots -->
            <div class="carousel-pagination">
              <button *ngFor="let sol of solutionsList; let i = index" 
                      class="page-indicator-pill" 
                      [class.active]="solNormalizedIndex === i"
                      (click)="goToSol(i)"
                      [attr.aria-label]="'Go to solution ' + (i + 1)">
                <span class="indicator-bar"></span>
              </button>
            </div>
          </div>

          <div class="section-bottom-cta">
            <a routerLink="/solutions" class="btn btn-secondary btn-lg">
              <span>{{ ts.t().home.viewAllSolutionsBtn }}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- 5. INDUSTRIES SHOWCASE SLIDER -->
      <section class="section-padding industries-showcase-section">
        <div class="container">
          <div class="section-heading-with-controls">
            <app-section-heading
              [badge]="ts.t().home.industriesBadge"
              [title]="ts.t().home.industriesTitle"
              [highlight]="ts.t().home.industriesTitleHighlight"
              [subtitle]="ts.t().home.industriesSubtitle"
              [centered]="false">
            </app-section-heading>

            <!-- Top Slider Controls -->
            <div class="slider-header-actions">
              <div class="slider-live-badge">
                <span class="live-dot" [class.paused]="isIndPaused"></span>
                <span>{{ isIndPaused ? 'Paused' : 'Auto-Looping' }}</span>
              </div>
              <div class="slider-btn-group">
                <button class="slider-nav-btn" (click)="prevInd()" aria-label="Previous Sector" title="Previous Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="slider-nav-btn" (click)="nextInd()" aria-label="Next Sector" title="Next Slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Slider Viewport and Track -->
          <div class="carousel-slider-wrapper" 
               (mouseenter)="pauseInd()" 
               (mouseleave)="resumeInd()"
               (touchstart)="onTouchStart($event)"
               (touchend)="onTouchEnd($event, 'ind')">
            
            <!-- Side Navigation Arrows -->
            <button class="side-arrow arrow-prev" (click)="prevInd()" aria-label="Previous Slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="side-arrow arrow-next" (click)="nextInd()" aria-label="Next Slide">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <div class="carousel-viewport">
              <div class="carousel-track ind-track" 
                   [class.no-transition]="indNoTransition"
                   [style.transform]="'translate3d(' + indTranslateX + ', 0, 0)'"
                   (transitionend)="onIndTransitionEnd()">
                <div *ngFor="let ind of displayIndustries; let idx = index" class="carousel-slide ind-slide">
                  <app-industry-card [industry]="ind"></app-industry-card>
                </div>
              </div>
            </div>

            <!-- Bottom Pagination Dots -->
            <div class="carousel-pagination">
              <button *ngFor="let ind of industriesList; let i = index" 
                      class="page-indicator-pill" 
                      [class.active]="indNormalizedIndex === i"
                      (click)="goToInd(i)"
                      [attr.aria-label]="'Go to industry ' + (i + 1)">
                <span class="indicator-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. HOW WE WORK (APPROACH) -->
      <section class="section-padding approach-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().home.approachBadge"
            [title]="ts.t().home.approachTitle"
            [highlight]="ts.t().home.approachTitleHighlight"
            [subtitle]="ts.t().home.approachSubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-3 approach-grid">
            <div *ngFor="let step of ts.t().data.approachSteps" class="glass-card step-card">
              <div class="step-header">
                <span class="step-number text-gradient">{{ step.step }}</span>
                <h3 class="step-title">{{ step.title }}</h3>
              </div>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. WHY DATASPIRE -->
      <section class="section-padding why-section">
        <div class="container">
          <app-section-heading
            [badge]="ts.t().home.whyBadge"
            [title]="ts.t().home.whyTitle"
            [highlight]="ts.t().home.whyTitleHighlight"
            [subtitle]="ts.t().home.whySubtitle"
            [centered]="true">
          </app-section-heading>

          <div class="grid-4 why-grid">
            <div *ngFor="let item of ts.t().data.whyFeatures" class="glass-card why-card">
              <div class="why-icon-circle">
                <ng-container [ngSwitch]="item.icon">
                  <svg *ngSwitchCase="'data'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                  <svg *ngSwitchCase="'shield'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <svg *ngSwitchCase="'chart'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  <svg *ngSwitchDefault width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </ng-container>
              </div>
              <h3 class="why-title">{{ item.title }}</h3>
              <p class="why-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. CAREERS CTA SECTION -->
      <section class="careers-cta-strip">
        <div class="container">
          <div class="careers-box">
            <div class="careers-box-content">
              <span class="hiring-badge">{{ ts.t().home.careersHiringBadge }}</span>
              <h3 class="careers-box-title">{{ ts.t().home.careersTitle }}</h3>
              <p class="careers-box-desc">{{ ts.t().home.careersDesc }}</p>
            </div>
            <a routerLink="/careers" class="btn btn-outline btn-lg">
              <span>{{ ts.t().home.careersBtn }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- 9. CONTACT CTA -->
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
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  ts = inject(TranslationService);
  company = COMPANY_INFO;

  // Solutions Slider State
  solIndex = 8;
  solNoTransition = false;
  isSolPaused = false;
  private solTimer?: any;

  // Industries Slider State
  indIndex = 6;
  indNoTransition = false;
  isIndPaused = false;
  private indTimer?: any;

  // Touch tracking for mobile swipe
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private seo: SeoService) {}

  get solutionsList() {
    return this.ts.t().data.coreSolutions || [];
  }

  get displaySolutions() {
    const list = this.solutionsList;
    return list.length ? [...list, ...list, ...list] : [];
  }

  get solNormalizedIndex(): number {
    const n = this.solutionsList.length;
    return n ? (this.solIndex % n) : 0;
  }

  get solTranslateX(): string {
    const total = this.displaySolutions.length;
    if (!total) return '0%';
    return `-${(this.solIndex * 100) / total}%`;
  }

  get industriesList() {
    return this.ts.t().data.industriesList || [];
  }

  get displayIndustries() {
    const list = this.industriesList;
    return list.length ? [...list, ...list, ...list] : [];
  }

  get indNormalizedIndex(): number {
    const n = this.industriesList.length;
    return n ? (this.indIndex % n) : 0;
  }

  get indTranslateX(): string {
    const total = this.displayIndustries.length;
    if (!total) return '0%';
    return `-${(this.indIndex * 100) / total}%`;
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'DataSpire | Data, Technology & Digital Transformation',
      description: 'DataSpire helps educational institutions, businesses, and cooperative banks transform data and technology into simple, secure, and actionable digital solutions.',
      keywords: 'DataSpire, Analytics, Digital Transformation, Education ERP, Cooperative Banking MIS, Cloud Software, Custom Application Development'
    });

    this.solIndex = this.solutionsList.length || 8;
    this.indIndex = this.industriesList.length || 6;
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.solTimer = setInterval(() => {
      if (!this.isSolPaused) {
        this.nextSol();
      }
    }, 3800);

    this.indTimer = setInterval(() => {
      if (!this.isIndPaused) {
        this.nextInd();
      }
    }, 4500);
  }

  stopAutoplay() {
    if (this.solTimer) clearInterval(this.solTimer);
    if (this.indTimer) clearInterval(this.indTimer);
  }

  // Solution Carousel Controls
  nextSol() {
    this.solIndex++;
  }

  prevSol() {
    this.solIndex--;
  }

  goToSol(index: number) {
    const n = this.solutionsList.length;
    this.solIndex = n + index;
  }

  onSolTransitionEnd() {
    const n = this.solutionsList.length;
    if (!n) return;
    if (this.solIndex >= 2 * n) {
      this.solNoTransition = true;
      this.solIndex = this.solIndex - n;
      setTimeout(() => {
        this.solNoTransition = false;
      }, 20);
    } else if (this.solIndex < n) {
      this.solNoTransition = true;
      this.solIndex = this.solIndex + n;
      setTimeout(() => {
        this.solNoTransition = false;
      }, 20);
    }
  }

  pauseSol() {
    this.isSolPaused = true;
  }

  resumeSol() {
    this.isSolPaused = false;
  }

  // Industry Carousel Controls
  nextInd() {
    this.indIndex++;
  }

  prevInd() {
    this.indIndex--;
  }

  goToInd(index: number) {
    const n = this.industriesList.length;
    this.indIndex = n + index;
  }

  onIndTransitionEnd() {
    const n = this.industriesList.length;
    if (!n) return;
    if (this.indIndex >= 2 * n) {
      this.indNoTransition = true;
      this.indIndex = this.indIndex - n;
      setTimeout(() => {
        this.indNoTransition = false;
      }, 20);
    } else if (this.indIndex < n) {
      this.indNoTransition = true;
      this.indIndex = this.indIndex + n;
      setTimeout(() => {
        this.indNoTransition = false;
      }, 20);
    }
  }

  pauseInd() {
    this.isIndPaused = true;
  }

  resumeInd() {
    this.isIndPaused = false;
  }

  // Touch handlers for mobile swipe
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent, slider: 'sol' | 'ind') {
    this.touchEndX = e.changedTouches[0].screenX;
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        slider === 'sol' ? this.nextSol() : this.nextInd();
      } else {
        slider === 'sol' ? this.prevSol() : this.prevInd();
      }
    }
  }
}
