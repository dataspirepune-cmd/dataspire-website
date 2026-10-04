import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';
import { TranslationService } from '../../core/translation.service';
import { COMPANY_INFO } from '../../shared/data/company.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="contact-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="container">
          <div class="pill-badge">
            <span class="dot"></span>
            <span>{{ ts.t().contact.heroBadge }}</span>
          </div>
          <h1 class="page-title">
            {{ ts.t().contact.heroTitle }} <span class="text-gradient">{{ ts.t().contact.heroTitleHighlight }}</span>
          </h1>
          <p class="page-lead">
            {{ ts.t().contact.heroLead }}
          </p>
        </div>
      </section>

      <!-- Main Contact Section -->
      <section class="section-padding contact-main-section">
        <div class="container">
          <div class="contact-layout-grid">
            <!-- Left Contact Info & Direct Desks -->
            <div class="contact-info-col">
              <div class="glass-card contact-card">
                <h2 class="card-heading">{{ ts.t().contact.cardHeading }}</h2>
                <p class="card-sub">{{ ts.t().contact.cardSub }}</p>

                <!-- WhatsApp Quick Card -->
                <div class="whatsapp-highlight-box">
                  <div class="wa-icon-circle">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div class="wa-content">
                    <span class="wa-tag">{{ ts.t().contact.waSupportTag }}</span>
                    <strong class="wa-num">{{ company.contact.whatsappDisplay }}</strong>
                    <p class="wa-sub">{{ ts.t().contact.waSub }}</p>
                  </div>
                  <a [href]="'https://wa.me/' + company.contact.whatsappNumber + '?text=Hello%20DataSpire%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.'" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="btn btn-wa">
                    <span>{{ ts.t().contact.chatWaBtn }}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </a>
                </div>

                <div class="info-items-stack">
                  <!-- Email -->
                  <div class="info-item">
                    <div class="icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div>
                      <span class="item-label">{{ ts.t().contact.generalInquiries }}</span>
                      <a [href]="'mailto:' + company.contact.email" class="item-val">{{ company.contact.email }}</a>
                    </div>
                  </div>

                  <!-- Phone / WhatsApp -->
                  <div class="info-item">
                    <div class="icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <span class="item-label">{{ ts.t().contact.phoneLabel }}</span>
                      <a [href]="'tel:' + company.contact.phone" class="item-val">{{ company.contact.phone }}</a>
                    </div>
                  </div>

                  <!-- Location -->
                  <div class="info-item">
                    <div class="icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <span class="item-label">{{ ts.t().contact.locationLabel }}</span>
                      <span class="item-val">{{ company.contact.location }}</span>
                    </div>
                  </div>
                </div>

                <!-- Specialized Desks -->
                <div class="specialized-desks">
                  <h3 class="desks-heading">{{ ts.t().contact.desksHeading }}</h3>
                  <div class="desks-grid">
                    <div class="desk-pill">
                      <span class="desk-title">{{ ts.t().contact.desks.business }}:</span>
                      <a [href]="'mailto:' + company.contact.inquiries.business">{{ company.contact.inquiries.business }}</a>
                    </div>
                    <div class="desk-pill">
                      <span class="desk-title">{{ ts.t().contact.desks.careers }}:</span>
                      <a [href]="'mailto:' + company.contact.inquiries.careers">{{ company.contact.inquiries.careers }}</a>
                    </div>
                    <div class="desk-pill">
                      <span class="desk-title">{{ ts.t().contact.desks.partnerships }}:</span>
                      <a [href]="'mailto:' + company.contact.inquiries.partnerships">{{ company.contact.inquiries.partnerships }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Interactive Inquiry Form -->
            <div class="contact-form-col">
              <div class="glass-card form-card">
                <div class="form-header">
                  <div>
                    <h2 class="form-title">{{ ts.t().contact.formTitle }}</h2>
                    <p class="form-subtitle">{{ ts.t().contact.formSubtitle }}</p>
                  </div>
                  <div class="wa-badge">
                    <span class="dot-online"></span>
                    <span>{{ ts.t().contact.waRoutingBadge }}</span>
                  </div>
                </div>

                <!-- Loading State while sending email -->
                <div *ngIf="isSending" class="sending-overlay">
                  <div class="spinner"></div>
                  <h3>Sending inquiry to dataspirepune&#64;gmail.com...</h3>
                  <p>Please wait a moment while your message is delivered.</p>
                </div>

                <!-- 1. WhatsApp Success Banner -->
                <div *ngIf="isSubmitted && submissionType === 'whatsapp' && !isSending" class="success-banner wa-success">
                  <div class="success-icon">✓</div>
                  <div class="success-text">
                    <strong>{{ ts.t().contact.redirectingText }}</strong>
                    <p>{{ ts.t().contact.redirectingSub }}</p>
                    <div class="action-buttons-wrap">
                      <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-wa-submit">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>{{ ts.t().contact.openWaNowBtn }}</span>
                      </a>
                      <button type="button" (click)="resetForm()" class="btn btn-secondary btn-sm">
                        <span>← Submit Another Inquiry</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 2. Email Success Banner -->
                <div *ngIf="isSubmitted && submissionType === 'email' && !isSending" class="success-banner email-success">
                  <div class="success-icon email-icon">✓</div>
                  <div class="success-text">
                    <strong *ngIf="emailSentDirectly">Inquiry Sent Successfully!</strong>
                    <strong *ngIf="!emailSentDirectly">{{ ts.t().contact.emailRedirectingText }}</strong>
                    
                    <p *ngIf="emailSentDirectly">
                      Your inquiry has been delivered directly to <strong>dataspirepune&#64;gmail.com</strong>. Our team will get back to you shortly.
                    </p>
                    <p *ngIf="!emailSentDirectly">
                      {{ ts.t().contact.emailRedirectingSub }}
                    </p>

                    <div class="action-buttons-wrap">
                      <a [href]="gmailUrl" target="_blank" rel="noopener noreferrer" class="btn btn-gmail-submit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>{{ ts.t().contact.openGmailBtn }}</span>
                      </a>
                      <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-wa-submit">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>Also Send on WhatsApp</span>
                      </a>
                      <button type="button" (click)="resetForm()" class="btn btn-secondary btn-sm">
                        <span>← Submit Another Inquiry</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Interactive Form -->
                <form class="inquiry-form" (submit)="$event.preventDefault()" (keydown.enter)="$event.preventDefault()" *ngIf="!isSubmitted && !isSending">
                  <div class="form-row grid-2">
                    <div class="form-group">
                      <label for="name">{{ ts.t().contact.labels.name }} <span class="req">*</span></label>
                      <input type="text" id="name" name="name" [(ngModel)]="formData.name" placeholder="e.g. Rajesh Patil" required>
                    </div>
                    <div class="form-group">
                      <label for="email">{{ ts.t().contact.labels.email }} <span class="req">*</span></label>
                      <input type="email" id="email" name="email" [(ngModel)]="formData.email" placeholder="rajesh@institution.edu" required>
                    </div>
                  </div>

                  <div class="form-row grid-2">
                    <div class="form-group">
                      <label for="phone">{{ ts.t().contact.labels.phone }} <span class="req">*</span></label>
                      <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone" placeholder="+91 98765 43210" required>
                    </div>
                    <div class="form-group">
                      <label for="organization">{{ ts.t().contact.labels.organization }} <span class="req">*</span></label>
                      <input type="text" id="organization" name="organization" [(ngModel)]="formData.organization" placeholder="e.g. Apex Institute of Tech" required>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="interestedIn">{{ ts.t().contact.labels.interestedIn }} <span class="req">*</span></label>
                    <select id="interestedIn" name="interestedIn" [(ngModel)]="formData.interestedIn" (click)="$event.stopPropagation()" (change)="$event.stopPropagation()" required>
                      <option value="" disabled selected>Select an area of interest</option>
                      <option *ngFor="let opt of ts.t().contact.interestOptions" [value]="opt.value">{{ opt.label }}</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="message">{{ ts.t().contact.labels.message }} <span class="req">*</span></label>
                    <textarea id="message" name="message" rows="4" [(ngModel)]="formData.message" placeholder="Please describe your key workflows, challenges, or goals..." required></textarea>
                  </div>

                  <!-- Dual Submit Buttons (WhatsApp & Email) -->
                  <div class="dual-submit-container">
                    <span class="dual-submit-label">{{ ts.t().contact.labels.chooseMethod }}</span>
                    <div class="dual-buttons-grid">
                      <!-- 1. WhatsApp Action -->
                      <button type="button" (click)="onButtonClick($event, 'whatsapp')" class="btn btn-wa-action" [disabled]="!isValidForm()">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>{{ ts.t().contact.labels.sendWaBtn }}</span>
                      </button>

                      <!-- 2. Direct Email Action -->
                      <button type="button" (click)="onButtonClick($event, 'email')" class="btn btn-email-action" [disabled]="!isValidForm()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>{{ ts.t().contact.labels.sendEmailBtn }}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ts = inject(TranslationService);
  company = COMPANY_INFO;
  isSubmitted = false;
  isSending = false;
  emailSentDirectly = false;
  submissionType: 'whatsapp' | 'email' | null = null;
  whatsappUrl = '';
  mailtoUrl = '';
  gmailUrl = '';

  formData = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    interestedIn: '',
    message: ''
  };

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Contact Us | Let’s Build Something Better Together',
      description: 'Get in touch with DataSpire via WhatsApp (+91 86689 31557) or Email (dataspirepune@gmail.com) for custom software, education management, cooperative banking MIS, and enterprise analytics.',
      keywords: 'Contact DataSpire, dataspirepune@gmail.com, WhatsApp +91 86689 31557, Software Consultation, Pune Technology Company'
    });
  }

  isValidForm(): boolean {
    return Boolean(this.formData.name.trim() && this.formData.organization.trim());
  }

  onButtonClick(event: Event, method: 'whatsapp' | 'email'): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.onSubmit(method);
  }

  onSubmit(method: 'whatsapp' | 'email'): void {
    if (!this.isValidForm()) {
      alert('Please provide your name and organization name.');
      return;
    }

    const org = this.formData.organization.trim();
    const name = this.formData.name.trim();
    const phone = this.formData.phone.trim() || 'Not provided';
    const email = this.formData.email.trim() || 'Not provided';
    const interest = this.formData.interestedIn || 'General Discussion';
    const msg = this.formData.message.trim() || 'I would like to explore DataSpire solutions.';

    // Generate WhatsApp link
    const waText = 
`*New Lead from DataSpire Website* 🚀

👤 *Name:* ${name}
🏢 *Organization:* ${org}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
🎯 *Interested In:* ${interest}

💬 *Requirement / Message:*
${msg}`;

    const encWa = encodeURIComponent(waText);
    this.whatsappUrl = `https://api.whatsapp.com/send?phone=${this.company.contact.whatsappNumber}&text=${encWa}`;

    // Generate Email Links
    const subject = `[Website Inquiry] ${org} - ${interest}`;
    const emailBody = 
`Hello DataSpire Team,

Here are my project inquiry details from the DataSpire website:

Name: ${name}
Organization: ${org}
Work Email: ${email}
Phone Number: ${phone}
Interested In: ${interest}

Project Requirements & Message:
${msg}

---------------------------------
Sent from DataSpire Corporate Portal`;

    const encSubject = encodeURIComponent(subject);
    const encBody = encodeURIComponent(emailBody);

    this.mailtoUrl = `mailto:${this.company.contact.email}?subject=${encSubject}&body=${encBody}`;
    this.gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.company.contact.email}&su=${encSubject}&body=${encBody}`;

    if (method === 'whatsapp') {
      this.submissionType = 'whatsapp';
      this.isSubmitted = true;
      window.open(this.whatsappUrl, '_blank');

    } else if (method === 'email') {
      this.isSending = true;
      this.submissionType = 'email';

      // Perform direct serverless submission to FormSubmit using the token for dataspirepune@gmail.com
      const formSubmitToken = '99f839ec14f022c088b7ebbe35178254';
      const payload = {
        name: name,
        organization: org,
        email: email,
        phone: phone,
        interestedIn: interest,
        message: msg,
        _subject: subject,
        _template: 'table',
        _captcha: 'false'
      };

      fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(async (response) => {
        this.isSending = false;
        let isSuccess = false;
        try {
          const data = await response.json();
          if (response.ok && (data?.success === 'true' || data?.success === true)) {
            isSuccess = true;
          }
        } catch {
          isSuccess = response.ok;
        }

        if (isSuccess) {
          this.emailSentDirectly = true;
        } else {
          // If domain activation is needed or submission fails, gracefully fallback
          this.emailSentDirectly = false;
          window.open(this.gmailUrl, '_blank');
        }
        this.isSubmitted = true;
      })
      .catch(() => {
        this.isSending = false;
        this.emailSentDirectly = false;
        window.open(this.gmailUrl, '_blank');
        this.isSubmitted = true;
      });
    }
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.isSending = false;
    this.submissionType = null;
    this.emailSentDirectly = false;
  }
}
