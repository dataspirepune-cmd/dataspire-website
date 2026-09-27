import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="cta-banner-wrapper">
      <div class="container">
        <div class="cta-glass-banner">
          <div class="cta-glow-bg"></div>
          
          <div class="cta-inner">
            <div class="cta-text">
              <div class="pill-badge">
                <span class="dot"></span>
                <span>{{ badge }}</span>
              </div>
              <h2 class="cta-title">{{ title }}</h2>
              <p class="cta-description">{{ description }}</p>
            </div>

            <div class="cta-actions">
              <a [routerLink]="primaryLink" class="btn btn-primary btn-lg">
                <span>{{ primaryLabel }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a *ngIf="secondaryLabel" [routerLink]="secondaryLink" class="btn btn-secondary btn-lg">
                <span>{{ secondaryLabel }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-banner-wrapper {
      padding: 4rem 0 6rem;
    }

    .cta-glass-banner {
      position: relative;
      background: linear-gradient(135deg, rgba(12, 20, 39, 0.95) 0%, rgba(18, 30, 60, 0.95) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: var(--radius-lg);
      padding: 3.5rem;
      overflow: hidden;
      box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.15);
    }

    .cta-glow-bg {
      position: absolute;
      top: -50%;
      right: -20%;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(37, 99, 235, 0) 70%);
      pointer-events: none;
    }

    .cta-inner {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
    }

    .cta-text {
      max-width: 650px;

      .cta-title {
        font-size: 2.35rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #ffffff;
        margin-bottom: 1rem;
      }

      .cta-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }

    .cta-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 240px;

      .btn-lg {
        padding: 0.9rem 1.75rem;
        font-size: 1rem;
      }
    }

    @media (max-width: 900px) {
      .cta-glass-banner {
        padding: 2.25rem 1.75rem;
      }

      .cta-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
      }

      .cta-actions {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;

        .btn {
          flex: 1;
        }
      }

      .cta-text .cta-title {
        font-size: 1.75rem;
      }
    }
  `]
})
export class CtaSectionComponent {
  @Input() badge: string = 'Start Your Transformation';
  @Input() title: string = 'Ready to Turn Your Operational Data Into Strategic Advantage?';
  @Input() description: string = 'Consult with our software and data architects to build a customized, secure, and scalable solution tailored specifically to your institution.';
  @Input() primaryLabel: string = 'Talk to Us';
  @Input() primaryLink: string = '/contact';
  @Input() secondaryLabel: string = 'Explore Solutions';
  @Input() secondaryLink: string = '/solutions';
}
