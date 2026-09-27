import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../models/site.models';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-card service-card" [id]="service.id">
      <div class="service-header">
        <div class="service-icon">
          <ng-container [ngSwitch]="service.icon">
            <!-- Code Browser -->
            <svg *ngSwitchCase="'code-browser'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <!-- Server -->
            <svg *ngSwitchCase="'server'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            <!-- Bar Chart -->
            <svg *ngSwitchCase="'bar-chart'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
            <!-- Cloud Cog -->
            <svg *ngSwitchCase="'cloud-cog'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            <!-- Git Branch -->
            <svg *ngSwitchCase="'git-branch'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
            <!-- Database -->
            <svg *ngSwitchCase="'database'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            <!-- CPU Chip -->
            <svg *ngSwitchCase="'cpu-chip'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>
            <!-- Default Shield -->
            <svg *ngSwitchDefault width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </ng-container>
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
      </div>

      <p class="service-desc">{{ service.description }}</p>

      <div class="service-capabilities">
        <span class="cap-title">{{ ts.t().common.coreCapabilities }}:</span>
        <ul class="cap-list">
          <li *ngFor="let feat of service.features">
            <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            <span>{{ feat }}</span>
          </li>
        </ul>
      </div>

      <div *ngIf="service.deliverables && service.deliverables.length" class="deliverables-box">
        <span class="del-title">{{ ts.t().common.standardDeliverables }}:</span>
        <div class="del-pills">
          <span *ngFor="let item of service.deliverables" class="del-pill">{{ item }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      scroll-margin-top: calc(var(--header-height) + 1.5rem);
    }

    .service-header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .service-icon {
      width: 50px;
      height: 50px;
      border-radius: var(--radius-sm);
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(37, 99, 235, 0.2) 100%);
      border: 1px solid rgba(56, 189, 248, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-cyan);
      flex-shrink: 0;
    }

    .service-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.3;
    }

    .service-desc {
      font-size: 0.925rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .service-capabilities {
      margin-bottom: 1.5rem;
      flex-grow: 1;

      .cap-title {
        font-size: 0.775rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94a3b8;
        display: block;
        margin-bottom: 0.75rem;
      }

      .cap-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);

          .check-icon {
            width: 15px;
            height: 15px;
            color: var(--accent-cyan);
            flex-shrink: 0;
            margin-top: 3px;
          }
        }
      }
    }

    .deliverables-box {
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);

      .del-title {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 0.04em;
        display: block;
        margin-bottom: 0.5rem;
      }

      .del-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;

        .del-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          color: #cbd5e1;
        }
      }
    }
  `]
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
  ts = inject(TranslationService);
}
