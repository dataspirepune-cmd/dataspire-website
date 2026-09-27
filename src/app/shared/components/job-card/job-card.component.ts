import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPosition } from '../../models/site.models';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-card job-card">
      <div class="job-header">
        <div>
          <div class="job-dept-badge">{{ job.department }}</div>
          <h3 class="job-title">{{ job.title }}</h3>
        </div>
        <div class="job-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {{ job.experience }}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {{ job.location }}
          </span>
        </div>
      </div>

      <p class="job-description">{{ job.description }}</p>

      <!-- Skills Chips -->
      <div class="skills-block">
        <span class="skills-label">{{ ts.t().common.requiredSkills }}:</span>
        <div class="skill-chips">
          <span *ngFor="let s of job.skills" class="chip">{{ s }}</span>
        </div>
      </div>

      <!-- Requirements Checklist -->
      <div class="requirements-block">
        <span class="req-label">{{ ts.t().common.keyResponsibilities }}:</span>
        <ul class="req-list">
          <li *ngFor="let req of job.requirements">
            <span class="bullet"></span>
            <span>{{ req }}</span>
          </li>
        </ul>
      </div>

      <!-- Action -->
      <div class="job-action">
        <button (click)="onApply()" class="btn btn-primary btn-apply">
          <span>{{ ts.t().common.applyForRole }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .job-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-radius: var(--radius-lg);
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .job-dept-badge {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--accent-cyan);
      margin-bottom: 0.35rem;
    }

    .job-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ffffff;
    }

    .job-meta {
      display: flex;
      gap: 0.85rem;
      flex-wrap: wrap;

      .meta-item {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.8125rem;
        color: var(--text-secondary);
        background: rgba(255, 255, 255, 0.04);
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border-subtle);

        svg {
          color: var(--accent-cyan);
        }
      }
    }

    .job-description {
      font-size: 0.925rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }

    .skills-block {
      margin-bottom: 1.25rem;

      .skills-label {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #94a3b8;
        display: block;
        margin-bottom: 0.5rem;
      }

      .skill-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;

        .chip {
          font-size: 0.775rem;
          font-weight: 500;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          background: rgba(56, 189, 248, 0.08);
          color: #bae6fd;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }
      }
    }

    .requirements-block {
      margin-bottom: 1.5rem;
      flex-grow: 1;

      .req-label {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #94a3b8;
        display: block;
        margin-bottom: 0.5rem;
      }

      .req-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);

          .bullet {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--accent-cyan);
            margin-top: 8px;
            flex-shrink: 0;
          }
        }
      }
    }

    .job-action {
      padding-top: 1.25rem;
      border-top: 1px solid var(--border-subtle);

      .btn-apply {
        width: 100%;
      }
    }
  `]
})
export class JobCardComponent {
  @Input({ required: true }) job!: JobPosition;
  @Output() apply = new EventEmitter<JobPosition>();
  ts = inject(TranslationService);

  onApply(): void {
    this.apply.emit(this.job);
  }
}
