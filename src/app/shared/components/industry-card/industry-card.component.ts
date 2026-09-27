import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IndustryItem } from '../../models/site.models';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-industry-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="glass-card industry-card" [id]="industry.id">
      <div class="industry-icon-wrapper">
        <ng-container [ngSwitch]="industry.icon">
          <!-- School / Education -->
          <svg *ngSwitchCase="'school'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          <!-- ID Card / HR -->
          <svg *ngSwitchCase="'id-card'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><line x1="15" y1="8" x2="17" y2="8"></line><line x1="15" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="17" y2="16"></line></svg>
          <!-- Store / SMB -->
          <svg *ngSwitchCase="'store'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <!-- Landmark / Bank -->
          <svg *ngSwitchCase="'landmark'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
          <!-- Shield / Trust -->
          <svg *ngSwitchCase="'shield-check'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          <!-- Default Building -->
          <svg *ngSwitchDefault width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line><line x1="4" y1="12" x2="20" y2="12"></line></svg>
        </ng-container>
      </div>

      <div class="card-content">
        <h3 class="industry-title">{{ industry.title }}</h3>
        <span class="industry-subtitle">{{ industry.subtitle }}</span>
        <p class="industry-description">{{ industry.description }}</p>

        <!-- Key Solutions Tags -->
        <div class="key-solutions-box">
          <span class="box-label">{{ ts.t().common.includedModules }}:</span>
          <div class="solution-pills">
            <span *ngFor="let sol of industry.keySolutions" class="solution-pill">{{ sol }}</span>
          </div>
        </div>

        <!-- Target Audience Badges -->
        <div class="target-group">
          <span class="box-label">{{ ts.t().common.keyBeneficiaries }}:</span>
          <ul class="audience-list">
            <li *ngFor="let aud of industry.targetAudience">
              <span class="bullet-dot"></span>
              <span>{{ aud }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="industry-card-action">
        <a [routerLink]="industry.linkRoute || '/solutions'" 
           [fragment]="industry.linkFragment || industry.id" 
           class="btn btn-outline btn-sm">
          <span>{{ ts.t().common.viewDetailedSolution }}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .industry-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: var(--radius-lg);
      padding: 2rem;
      scroll-margin-top: calc(var(--header-height) + 1.5rem);
    }

    .industry-icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-md);
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(37, 99, 235, 0.25) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-cyan);
      margin-bottom: 1.5rem;
      box-shadow: 0 8px 20px rgba(56, 189, 248, 0.15);
    }

    .card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .industry-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 0.25rem;
    }

    .industry-subtitle {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 1rem;
      display: block;
    }

    .industry-description {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin-bottom: 1.5rem;
    }

    .box-label {
      font-size: 0.775rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #cbd5e1;
      display: block;
      margin-bottom: 0.6rem;
    }

    .key-solutions-box {
      margin-bottom: 1.5rem;

      .solution-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;

        .solution-pill {
          font-size: 0.785rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2e8f0;
        }
      }
    }

    .target-group {
      margin-bottom: 1.75rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);

      .audience-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);

          .bullet-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--accent-cyan);
          }
        }
      }
    }

    .industry-card-action {
      padding-top: 1.25rem;
      border-top: 1px solid var(--border-subtle);

      .btn-sm {
        width: 100%;
        padding: 0.6rem 1rem;
      }
    }
  `]
})
export class IndustryCardComponent {
  @Input({ required: true }) industry!: IndustryItem;
  ts = inject(TranslationService);
}
