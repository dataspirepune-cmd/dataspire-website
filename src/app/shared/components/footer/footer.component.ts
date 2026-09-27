import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_INFO } from '../../data/company.data';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer-wrapper">
      <div class="footer-glow"></div>
      
      <div class="container footer-content">
        <div class="footer-grid">
          <!-- Brand & Mission Column -->
          <div class="footer-brand-col">
            <a routerLink="/" class="footer-logo">
              <div class="logo-mark">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="10" fill="#0f172a"/>
                  <path d="M12 28L20 12L28 28M16 22H24" stroke="url(#f-grad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="20" cy="10" r="2.5" fill="#38bdf8"/>
                  <defs>
                    <linearGradient id="f-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#38bdf8"/>
                      <stop offset="1" stop-color="#2563eb"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="brand-text">
                <span class="brand-name">{{ company.name }}</span>
                <span class="brand-tagline">{{ ts.t().nav.tagline || company.tagline }}</span>
              </div>
            </a>

            <p class="brand-bio">
              {{ ts.t().footer.bio }}
            </p>

            <div class="location-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{{ company.contact.location }}</span>
            </div>
          </div>

          <!-- Company Links -->
          <div class="footer-links-col">
            <h4 class="col-title">{{ ts.t().footer.columns.companyTitle }}</h4>
            <ul class="link-list">
              <li *ngFor="let item of companyLinks">
                <a [routerLink]="item.route" [fragment]="item.fragment">{{ item.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Industries Links -->
          <div class="footer-links-col">
            <h4 class="col-title">{{ ts.t().footer.columns.industriesTitle }}</h4>
            <ul class="link-list">
              <li *ngFor="let item of ts.t().data.industriesList">
                <a routerLink="/industries" [fragment]="item.id">{{ item.title }}</a>
              </li>
            </ul>
          </div>

          <!-- Services Links -->
          <div class="footer-links-col">
            <h4 class="col-title">{{ ts.t().footer.columns.servicesTitle }}</h4>
            <ul class="link-list">
              <li *ngFor="let item of ts.t().data.servicesList">
                <a routerLink="/services" [fragment]="item.id">{{ item.title }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact & Inquiries Column -->
          <div class="footer-contact-col">
            <h4 class="col-title">{{ ts.t().footer.getInTouch }}</h4>
            <div class="contact-details">
              <a [href]="'mailto:' + company.contact.email" class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <span class="contact-label">{{ ts.t().footer.generalInquiry }}</span>
                  <strong class="contact-value">{{ company.contact.email }}</strong>
                </div>
              </a>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span class="contact-label">{{ ts.t().footer.directHotline }}</span>
                  <strong class="contact-value">{{ company.contact.phone }}</strong>
                </div>
              </div>
            </div>

            <div class="footer-cta-box">
              <p class="cta-micro">{{ ts.t().footer.ctaMicro }}</p>
              <a routerLink="/contact" class="btn btn-outline btn-sm">{{ ts.t().footer.scheduleConsultationBtn }}</a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <div class="copyright">
            © 2026 <strong>{{ company.name }}</strong>. {{ ts.t().footer.copyright }}
          </div>
          <div class="legal-links">
            <span class="legal-item">{{ ts.t().footer.privacy }}</span>
            <span class="divider">•</span>
            <span class="legal-item">{{ ts.t().footer.terms }}</span>
            <span class="divider">•</span>
            <span class="legal-item">{{ ts.t().footer.security }}</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ts = inject(TranslationService);
  company = COMPANY_INFO;

  get companyLinks() {
    const nav = this.ts.t().nav.links;
    return [
      { label: nav.find(n => n.route === '/about')?.label || 'About Us', route: '/about', fragment: undefined },
      { label: nav.find(n => n.route === '/solutions')?.label || 'Solutions', route: '/solutions', fragment: undefined },
      { label: nav.find(n => n.route === '/services')?.label || 'Services', route: '/services', fragment: undefined },
      { label: nav.find(n => n.route === '/industries')?.label || 'Industries', route: '/industries', fragment: undefined },
      { label: nav.find(n => n.route === '/careers')?.label || 'Careers', route: '/careers', fragment: undefined },
      { label: nav.find(n => n.route === '/contact')?.label || 'Contact', route: '/contact', fragment: undefined }
    ];
  }
}
