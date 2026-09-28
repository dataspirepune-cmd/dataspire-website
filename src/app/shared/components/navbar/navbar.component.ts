import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { COMPANY_INFO } from '../../data/company.data';
import { TranslationService } from '../../../core/translation.service';
import { SupportedLanguage } from '../../models/translation.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar-wrapper" [class.scrolled]="isScrolled">
      <div class="container navbar-container">
        <!-- Logo -->
        <a routerLink="/" class="logo-group" (click)="closeMobileMenu()">
          <div class="logo-mark">
            <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logo-grad-bg)"/>
              <path d="M12 28L20 12L28 28M16 22H24" stroke="url(#logo-grad-stroke)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="20" cy="10" r="2.5" fill="#38bdf8"/>
              <defs>
                <linearGradient id="logo-grad-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0f172a"/>
                  <stop offset="1" stop-color="#1e293b"/>
                </linearGradient>
                <linearGradient id="logo-grad-stroke" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#38bdf8"/>
                  <stop offset="1" stop-color="#2563eb"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="logo-text-block">
            <span class="brand-name">{{ company.name }}</span>
            <span class="brand-tagline">{{ ts.t().nav.tagline || company.tagline }}</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li *ngFor="let item of ts.t().nav.links" class="nav-item" [class.has-dropdown]="item.children && item.children.length">
              <a [routerLink]="item.route" 
                 routerLinkActive="active" 
                 [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                 class="nav-link">
                <span>{{ item.label }}</span>
                <span *ngIf="item.badge" class="nav-badge">{{ item.badge }}</span>
                <svg *ngIf="item.children && item.children.length" class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>

              <!-- Dropdown Menu -->
              <div *ngIf="item.children && item.children.length" class="dropdown-menu">
                <div class="dropdown-inner">
                  <a *ngFor="let sub of item.children" 
                     [routerLink]="sub.route" 
                     [fragment]="sub.fragment"
                     class="dropdown-item">
                    <span class="dropdown-item-title">{{ sub.label }}</span>
                    <span *ngIf="sub.description" class="dropdown-item-desc">{{ sub.description }}</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <!-- CTA & Language Switcher & Mobile Toggle -->
        <div class="navbar-actions">
          <!-- Desktop Language Selector -->
          <div class="lang-switch-group desktop-only-lang">
            <button class="lang-btn" 
                    *ngFor="let lang of ts.supportedLanguages" 
                    [class.active]="ts.currentLang() === lang.code"
                    (click)="setLang(lang.code)"
                    [title]="lang.label"
                    [attr.aria-label]="'Switch language to ' + lang.label">
              <span class="lang-text">{{ lang.nativeLabel }}</span>
            </button>
          </div>

          <!-- Mobile Sidebar Toggle Button -->
          <button class="mobile-toggle" 
                  [class.open]="mobileMenuOpen" 
                  (click)="toggleMobileMenu()" 
                  [attr.aria-expanded]="mobileMenuOpen"
                  aria-label="Toggle Navigation Sidebar">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Sidebar Backdrop Overlay -->
    <div class="mobile-sidebar-backdrop" 
         [class.active]="mobileMenuOpen" 
         (click)="closeMobileMenu()">
    </div>

    <!-- Mobile Sidebar Drawer (Outside header wrapper to avoid backdrop-filter trapping) -->
    <aside class="mobile-sidebar" [class.open]="mobileMenuOpen">
      <!-- Sidebar Header -->
      <div class="mobile-sidebar-header">
        <div class="sidebar-brand">
          <div class="sidebar-logo-icon">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="#0f172a"/>
              <path d="M12 28L20 12L28 28M16 22H24" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="20" cy="10" r="2.5" fill="#38bdf8"/>
            </svg>
          </div>
          <div>
            <span class="sidebar-title">{{ company.name }}</span>
            <span class="sidebar-subtitle">{{ ts.t().nav.tagline || company.tagline }}</span>
          </div>
        </div>

        <button class="sidebar-close-btn" (click)="closeMobileMenu()" aria-label="Close Navigation Sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Sidebar Content Body -->
      <div class="mobile-sidebar-content">
        <!-- Language Selector Section -->
        <div class="mobile-lang-section">
          <div class="lang-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>{{ ts.t().nav.languageLabel || 'Language' }}</span>
          </div>
          <div class="mobile-lang-options">
            <button class="m-lang-chip" 
                    *ngFor="let lang of ts.supportedLanguages" 
                    [class.active]="ts.currentLang() === lang.code"
                    (click)="setLang(lang.code)">
              {{ lang.nativeLabel }}
            </button>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="mobile-menu-nav">
          <div *ngFor="let item of ts.t().nav.links" class="mobile-menu-group">
            <div class="mobile-menu-item-row">
              <a [routerLink]="item.route" 
                 routerLinkActive="active" 
                 [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                 (click)="closeMobileMenu()" 
                 class="mobile-main-link">
                <span>{{ item.label }}</span>
                <span *ngIf="item.badge" class="nav-badge">{{ item.badge }}</span>
              </a>
            </div>

            <!-- Sub Links Tree -->
            <div *ngIf="item.children && item.children.length" class="mobile-sub-tree">
              <a *ngFor="let sub of item.children" 
                 [routerLink]="sub.route" 
                 [fragment]="sub.fragment"
                 (click)="closeMobileMenu()" 
                 class="mobile-child-link">
                <span class="tree-bullet"></span>
                <span>{{ sub.label }}</span>
              </a>
            </div>
          </div>
        </nav>

        <!-- Sidebar Bottom Footer Action -->
        <div class="mobile-sidebar-footer">
          <a routerLink="/contact" (click)="closeMobileMenu()" class="btn btn-primary w-full">
            <span>{{ ts.t().nav.cta }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>

          <div class="sidebar-contact-info">
            <a [href]="'tel:' + company.contact.phone" class="quick-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>{{ company.contact.phone }}</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ts = inject(TranslationService);
  company = COMPANY_INFO;
  private router = inject(Router);

  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit(): void {
    // Automatically close mobile menu on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  setLang(lang: SupportedLanguage): void {
    this.ts.setLanguage(lang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}


