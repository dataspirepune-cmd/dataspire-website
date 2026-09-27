import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-visual',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-visual-container">
      <!-- Glow Underlay -->
      <div class="glow-orb top-left"></div>
      <div class="glow-orb bottom-right"></div>

      <!-- Main Dashboard / Visual Matrix -->
      <div class="visual-glass-board">
        <!-- Header Bar -->
        <div class="board-header">
          <div class="window-controls">
            <span class="ctrl red"></span>
            <span class="ctrl yellow"></span>
            <span class="ctrl green"></span>
          </div>
          <div class="board-title">
            <span class="status-dot"></span>
            <span>DataSpire Core Intelligence Engine</span>
          </div>
          <div class="board-badge">LIVE v2.6</div>
        </div>

        <!-- Matrix Canvas / Visual Graph Area -->
        <div class="board-body">
          <svg class="graph-svg" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Grid Lines -->
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
              </pattern>
              <linearGradient id="streamGrad" x1="0" y1="0" x2="600" y2="360" gradientUnits="userSpaceOnUse">
                <stop stop-color="#38bdf8" stop-opacity="0.8"/>
                <stop offset="0.5" stop-color="#2563eb" stop-opacity="0.6"/>
                <stop offset="1" stop-color="#8b5cf6" stop-opacity="0.4"/>
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" />

            <!-- Connecting Curves -->
            <path class="flow-line line-1" d="M80 180 C 180 80, 220 280, 320 180 S 440 80, 520 180" stroke="url(#streamGrad)" stroke-width="2.5" fill="none"/>
            <path class="flow-line line-2" d="M120 100 C 220 220, 280 100, 400 240 S 480 160, 520 180" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1.5" stroke-dasharray="6 4" fill="none"/>
            <path class="flow-line line-3" d="M80 260 C 200 240, 240 120, 380 140 S 460 260, 520 180" stroke="rgba(99, 102, 241, 0.4)" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>

            <!-- Central Hub Node -->
            <g class="central-node" transform="translate(320, 180)">
              <circle r="36" fill="rgba(37, 99, 235, 0.15)" stroke="#38bdf8" stroke-width="1.5" filter="url(#glow)"/>
              <circle r="22" fill="#0f172a" stroke="#2563eb" stroke-width="2"/>
              <circle r="8" fill="#38bdf8" class="pulse-node"/>
            </g>

            <!-- Peripheral Nodes (Representing Target Sectors) -->
            <!-- Education Node -->
            <g class="sector-node node-edu" transform="translate(100, 100)">
              <circle r="24" fill="#0c1427" stroke="#38bdf8" stroke-width="1.5"/>
              <circle r="4" fill="#38bdf8"/>
            </g>

            <!-- Banking Node -->
            <g class="sector-node node-bank" transform="translate(100, 260)">
              <circle r="24" fill="#0c1427" stroke="#818cf8" stroke-width="1.5"/>
              <circle r="4" fill="#818cf8"/>
            </g>

            <!-- HR & Staff Node -->
            <g class="sector-node node-hr" transform="translate(500, 90)">
              <circle r="24" fill="#0c1427" stroke="#34d399" stroke-width="1.5"/>
              <circle r="4" fill="#34d399"/>
            </g>

            <!-- SMB & Enterprise Node -->
            <g class="sector-node node-smb" transform="translate(500, 260)">
              <circle r="24" fill="#0c1427" stroke="#f472b6" stroke-width="1.5"/>
              <circle r="4" fill="#f472b6"/>
            </g>
          </svg>

          <!-- Floating Interactive Metrics & Sector Pills -->
          <div class="floating-badge badge-edu">
            <div class="badge-icon">🎓</div>
            <div>
              <span class="badge-title">Education ERP</span>
              <span class="badge-val">99.8% Sync</span>
            </div>
          </div>

          <div class="floating-badge badge-bank">
            <div class="badge-icon">🏦</div>
            <div>
              <span class="badge-title">Co-op Banking MIS</span>
              <span class="badge-val">Multi-Branch</span>
            </div>
          </div>

          <div class="floating-badge badge-analytics">
            <div class="badge-icon">⚡</div>
            <div>
              <span class="badge-title">Real-Time Data Engine</span>
              <span class="badge-val">&lt; 15ms Latency</span>
            </div>
          </div>

          <div class="floating-badge badge-hr">
            <div class="badge-icon">👥</div>
            <div>
              <span class="badge-title">Staff & HR Matrix</span>
              <span class="badge-val">Automated</span>
            </div>
          </div>

          <!-- Bottom Mini Chart Bar -->
          <div class="metric-chart-bar">
            <div class="chart-label">
              <span>Operational Efficiency</span>
              <strong class="text-cyan">+340%</strong>
            </div>
            <div class="bar-track">
              <div class="bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tech-visual.component.scss']
})
export class TechVisualComponent {}
