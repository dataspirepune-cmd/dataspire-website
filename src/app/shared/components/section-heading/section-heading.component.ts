import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="heading-wrapper" [class.centered]="centered">
      <div *ngIf="badge" class="pill-badge">
        <span class="dot"></span>
        <span>{{ badge }}</span>
      </div>
      <h2 class="section-title">
        {{ title }}
        <span *ngIf="highlight" class="text-gradient"> {{ highlight }}</span>
      </h2>
      <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .heading-wrapper {
      margin-bottom: 3rem;
      max-width: 780px;

      &.centered {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    }

    .section-title {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .heading-wrapper {
        margin-bottom: 2rem;
      }
      .section-title {
        font-size: 1.75rem;
      }
      .section-subtitle {
        font-size: 0.975rem;
      }
    }
  `]
})
export class SectionHeadingComponent {
  @Input() badge?: string;
  @Input() title: string = '';
  @Input() highlight?: string;
  @Input() subtitle?: string;
  @Input() centered: boolean = true;
}
