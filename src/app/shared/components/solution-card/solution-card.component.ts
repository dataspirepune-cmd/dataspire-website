import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SolutionItem } from '../../models/site.models';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="glass-card solution-card" [id]="solution.id" [class.highlighted]="solution.highlight">
      <!-- Top Card Header -->
      <div class="card-top">
        <div class="card-icon-wrap">
          <ng-container [ngSwitch]="solution.icon">
            <!-- Chart Pie -->
            <svg *ngSwitchCase="'chart-pie'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            <!-- Trending Up -->
            <svg *ngSwitchCase="'trending-up'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            <!-- Cloud -->
            <svg *ngSwitchCase="'cloud'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            <!-- Zap -->
            <svg *ngSwitchCase="'zap'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <!-- CPU -->
            <svg *ngSwitchCase="'cpu'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            <!-- Terminal -->
            <svg *ngSwitchCase="'terminal'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            <!-- File Text -->
            <svg *ngSwitchCase="'file-text'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <!-- Default Layers -->
            <svg *ngSwitchDefault width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 20 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </ng-container>
        </div>

        <span *ngIf="solution.badge" class="solution-badge">{{ solution.badge }}</span>
      </div>

      <!-- Title & Subtitle -->
      <h3 class="solution-title">{{ solution.title }}</h3>
      <p class="solution-desc">{{ solution.description }}</p>

      <!-- Features List (if present) -->
      <ul *ngIf="solution.features && solution.features.length" class="feature-bullets">
        <li *ngFor="let feat of solution.features">
          <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span>{{ feat }}</span>
        </li>
      </ul>

      <!-- Card Footer Link -->
      <div class="card-footer">
        <a [routerLink]="['/solutions']" [fragment]="solution.id" class="learn-link">
          <span>{{ ts.t().common.exploreArchitecture }}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .solution-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      scroll-margin-top: calc(var(--header-height) + 1.5rem);
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .card-icon-wrap {
      width: 46px;
      height: 46px;
      border-radius: var(--radius-sm);
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(37, 99, 235, 0.12) 100%);
      border: 1px solid rgba(56, 189, 248, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-cyan);
    }

    .solution-badge {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      background: rgba(37, 99, 235, 0.15);
      color: #93c5fd;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }

    .solution-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.75rem;
    }

    .solution-desc {
      font-size: 0.925rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }

    .feature-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
      margin-bottom: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.55rem;
        font-size: 0.85rem;
        color: var(--text-secondary);

        .check-icon {
          width: 16px;
          height: 16px;
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }
      }
    }

    .card-footer {
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);

      .learn-link {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--accent-cyan);
        transition: gap var(--transition-fast);

        &:hover {
          gap: 0.65rem;
          color: #ffffff;
        }
      }
    }
  `]
})
export class SolutionCardComponent {
  @Input({ required: true }) solution!: SolutionItem;
  ts = inject(TranslationService);
}
