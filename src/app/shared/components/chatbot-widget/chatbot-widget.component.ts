import { Component, OnInit, inject, ViewChild, ElementRef, AfterViewChecked, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { COMPANY_INFO } from '../../data/company.data';
import { TranslationService } from '../../../core/translation.service';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: { label: string; action: string }[];
  linkUrl?: string;
  routePath?: string;
  fragment?: string;
  linkLabel?: string;
  isWa?: boolean;
}

@Component({
  selector: 'app-chatbot-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <!-- Floating Launcher Dock (Chatbot + WhatsApp + Email) -->
    <aside class="floating-dock-container" aria-label="Smart Assistant & Quick Connect">
      <!-- 1. Floating Email Action Button (Opens interactive options modal) -->
      <button type="button"
              (click)="openEmailModal($event)"
              class="float-action-btn email-float"
              [title]="ts.t().common.emailUs + ' (' + company.contact.email + ')'"
              aria-label="Email DataSpire Team">
        <div class="float-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <span class="float-text">{{ ts.t().common.emailUs }}</span>
      </button>

      <!-- 2. Floating WhatsApp Action -->
      <a [href]="'https://wa.me/' + company.contact.whatsappNumber + '?text=Hello%20DataSpire%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.'" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="float-action-btn wa-float"
         [title]="ts.t().common.chatOnWhatsApp + ' (' + company.contact.whatsappDisplay + ')'">
        <div class="float-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        <span class="float-text">{{ ts.t().common.chatOnWhatsApp }}</span>
      </a>

      <!-- 3. Chatbot Launcher Button -->
      <button class="float-action-btn bot-launcher-btn" 
              [class.active]="isOpen"
              (click)="toggleChat()"
              aria-label="Toggle DataSpire AI Assistant">
        <div class="bot-icon-wrap">
          <svg *ngIf="!isOpen" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
            <rect x="3" y="8" width="18" height="12" rx="4"></rect>
            <circle cx="8" cy="13" r="1.5" fill="currentColor"></circle>
            <circle cx="16" cy="13" r="1.5" fill="currentColor"></circle>
            <path d="M9 17c1 .8 2 1 3 1s2-.2 3-1"></path>
          </svg>
          <svg *ngIf="isOpen" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <span class="float-text" *ngIf="!isOpen">{{ getBotButtonLabel() }}</span>
        <span class="online-indicator-dot" *ngIf="!isOpen"></span>
      </button>
    </aside>

    <!-- Email Quick Connect Modal -->
    <div *ngIf="showEmailModal" class="email-modal-backdrop" (click)="closeEmailModal()">
      <div class="email-modal-card" (click)="$event.stopPropagation()">
        <button type="button" class="modal-close-btn" (click)="closeEmailModal()" aria-label="Close Email Modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div class="email-modal-header">
          <div class="email-modal-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>{{ getEmailModalBadge() }}</span>
          </div>
          <h3 class="email-modal-title">{{ getEmailModalTitle() }}</h3>
          <p class="email-modal-sub">{{ getEmailModalSubtitle() }}</p>
        </div>

        <div class="email-modal-body">
          <!-- 1-Click Copy Box -->
          <div class="email-address-box">
            <div class="email-details">
              <span class="email-label">{{ getEmailLabelText() }}</span>
              <strong class="email-val">{{ company.contact.email }}</strong>
            </div>
            <button type="button" class="btn-copy-email" (click)="copyEmailAddress()" [class.copied]="emailCopied">
              <svg *ngIf="!emailCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <svg *ngIf="emailCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>{{ emailCopied ? getCopiedLabel() : getCopyLabel() }}</span>
            </button>
          </div>

          <!-- Quick Action Options List -->
          <div class="email-actions-list">
            <!-- 1. Gmail Web (Works on every browser without mail app configuration) -->
            <a [href]="gmailComposeUrl" target="_blank" rel="noopener noreferrer" class="email-action-card gmail-card">
              <div class="action-card-icon gmail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.268H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.5l8.073-6.007c1.618-1.214 3.927-.059 3.927 1.964z"/>
                </svg>
              </div>
              <div class="action-card-info">
                <strong>{{ getGmailTitle() }}</strong>
                <span>{{ getGmailDesc() }}</span>
              </div>
              <svg class="action-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <!-- 2. System Mail Client -->
            <a [href]="mailtoUrl" class="email-action-card mail-client-card">
              <div class="action-card-icon client-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="action-card-info">
                <strong>{{ getMailClientTitle() }}</strong>
                <span>{{ getMailClientDesc() }}</span>
              </div>
              <svg class="action-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>

            <!-- 3. Online Contact Form -->
            <a routerLink="/contact" (click)="closeEmailModal()" class="email-action-card contact-card">
              <div class="action-card-icon form-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div class="action-card-info">
                <strong>{{ getContactFormTitle() }}</strong>
                <span>{{ getContactFormDesc() }}</span>
              </div>
              <svg class="action-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>

          <div class="email-modal-footer">
            <span class="response-note">{{ getResponseNote() }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Chatbot Popup Window -->
    <div class="chatbot-window" [class.open]="isOpen">
      <!-- Chatbot Header -->
      <div class="chatbot-header">
        <div class="header-bot-info">
          <div class="bot-avatar">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="8" width="18" height="12" rx="4"></rect>
              <circle cx="8" cy="13" r="1.5" fill="currentColor"></circle>
              <circle cx="16" cy="13" r="1.5" fill="currentColor"></circle>
              <path d="M9 17c1 .8 2 1 3 1s2-.2 3-1"></path>
              <path d="M12 2v6"></path>
            </svg>
            <span class="avatar-online-dot"></span>
          </div>
          <div>
            <h4 class="bot-name">{{ getBotHeaderTitle() }}</h4>
            <span class="bot-status">{{ getBotHeaderStatus() }}</span>
          </div>
        </div>

        <div class="header-actions">
          <button (click)="resetChat()" class="btn-icon" title="Reset Conversation">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
          </button>
          <button (click)="toggleChat()" class="btn-icon" title="Close Chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <!-- Messages Stream -->
      <div class="chatbot-messages" #messagesContainer>
        <div *ngFor="let msg of messages" class="message-row" [class.user]="msg.sender === 'user'" [class.bot]="msg.sender === 'bot'">
          <!-- Bot Avatar -->
          <div *ngIf="msg.sender === 'bot'" class="msg-avatar">
            <span>DS</span>
          </div>

          <!-- Bubble Content -->
          <div class="msg-bubble">
            <div class="msg-text" [innerHTML]="formatMessage(msg.text)"></div>
            
            <!-- Link Action Button inside message -->
            <div *ngIf="msg.routePath || msg.linkUrl" class="msg-link-box">
              <a *ngIf="msg.routePath" 
                 [routerLink]="[msg.routePath]" 
                 [fragment]="msg.fragment" 
                 (click)="onChatLinkClick()" 
                 class="btn-msg-action">
                <span>{{ msg.linkLabel }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a *ngIf="!msg.routePath && msg.linkUrl" 
                 [href]="msg.linkUrl" 
                 [target]="msg.isWa ? '_blank' : '_self'" 
                 class="btn-msg-action" 
                 [class.wa-btn]="msg.isWa">
                <span>{{ msg.linkLabel }}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <!-- Quick Action Pills inside message -->
            <div *ngIf="msg.options && msg.options.length" class="msg-options-grid">
              <button *ngFor="let opt of msg.options" (click)="handleQuickAction(opt.action)" class="quick-pill-btn">
                {{ opt.label }}
              </button>
            </div>

            <span class="msg-time">{{ msg.time }}</span>
          </div>
        </div>

        <!-- Bot Typing Indicator -->
        <div *ngIf="isTyping" class="message-row bot typing">
          <div class="msg-avatar">
            <span>DS</span>
          </div>
          <div class="msg-bubble typing-bubble">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
          </div>
        </div>
      </div>

      <!-- Quick Action Shortcuts Bar -->
      <div class="chat-shortcuts-bar">
        <button *ngFor="let chip of shortcutChips" 
                (click)="handleQuickAction(chip.action)" 
                class="shortcut-chip"
                [class.marketing-chip]="chip.isMarketing">
          {{ chip.label }}
        </button>
      </div>

      <!-- Chatbot Input Footer -->
      <form (submit)="sendMessage($event)" class="chatbot-input-bar">
        <input type="text" 
               [(ngModel)]="userInput" 
               name="userInput" 
               [placeholder]="getInputPlaceholder()" 
               autocomplete="off"
               [disabled]="isTyping">
        <button type="submit" [disabled]="!userInput.trim() || isTyping" class="btn-send" aria-label="Send Message">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./chatbot-widget.component.scss']
})
export class ChatbotWidgetComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  ts = inject(TranslationService);
  company = COMPANY_INFO;

  isOpen = false;
  isTyping = false;
  userInput = '';
  messages: ChatMessage[] = [];

  // Email Quick Connect Modal State
  showEmailModal = false;
  emailCopied = false;

  get gmailComposeUrl(): string {
    const email = encodeURIComponent(this.company.contact.email);
    const subject = encodeURIComponent('Inquiry from DataSpire Website');
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  }

  get mailtoUrl(): string {
    return `mailto:${this.company.contact.email}?subject=Inquiry%20from%20DataSpire%20Website`;
  }

  ngOnInit(): void {
    this.initWelcomeMessage();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showEmailModal) {
      this.closeEmailModal();
    }
  }

  openEmailModal(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.showEmailModal = true;
    this.emailCopied = false;
  }

  closeEmailModal(): void {
    this.showEmailModal = false;
  }

  copyEmailAddress(): void {
    const email = this.company.contact.email;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        this.emailCopied = true;
        setTimeout(() => (this.emailCopied = false), 2500);
      }).catch(() => {
        this.fallbackCopy(email);
      });
    } else {
      this.fallbackCopy(email);
    }
  }

  private fallbackCopy(text: string): void {
    const input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2500);
    } catch (e) {}
    document.body.removeChild(input);
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.initWelcomeMessage();
    }
  }

  resetChat(): void {
    this.messages = [];
    this.initWelcomeMessage();
  }

  onChatLinkClick(): void {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.isOpen = false;
    }
  }

  get shortcutChips(): { label: string; action: string; isMarketing?: boolean }[] {
    const lang = this.ts.currentLang();
    if (lang === 'mr') {
      return [
        { label: '🚀 डिजिटल मार्केटिंग', action: 'marketing', isMarketing: true },
        { label: '🎓 शिक्षण संस्था ERP', action: 'edu' },
        { label: '🏦 बँक MIS सोल्यूशन', action: 'bank' },
        { label: '👥 कर्मचारी व HR', action: 'staff' },
        { label: '💬 व्हॉट्सॲप', action: 'wa' }
      ];
    } else if (lang === 'hi') {
      return [
        { label: '🚀 डिजिटल मार्केटिंग', action: 'marketing', isMarketing: true },
        { label: '🎓 शिक्षा संस्थान ERP', action: 'edu' },
        { label: '🏦 बैंक MIS समाधान', action: 'bank' },
        { label: '👥 स्टाफ और HR', action: 'staff' },
        { label: '💬 व्हाट्सएप', action: 'wa' }
      ];
    } else {
      return [
        { label: '🚀 Digital Marketing', action: 'marketing', isMarketing: true },
        { label: '🎓 Education ERP', action: 'edu' },
        { label: '🏦 Co-op Bank MIS', action: 'bank' },
        { label: '👥 Staff & HR', action: 'staff' },
        { label: '💬 WhatsApp', action: 'wa' }
      ];
    }
  }

  private initWelcomeMessage(): void {
    const lang = this.ts.currentLang();
    let text = '';
    let options: { label: string; action: string }[] = [];

    if (lang === 'mr') {
      text = `नमस्कार! 🙏 **DataSpire** च्या स्मार्ट असिस्टंटमध्ये आपले स्वागत आहे. आम्ही शिक्षण संस्था, सहकारी बँका, कर्मचारी व्यवस्थापन, **डिजिटल मार्केटिंग व व्यवसाय वाढीसाठी** आधुनिक सोल्यूशन्स देतो. आज मी तुम्हाला कशी मदत करू शकतो?`;
      options = [
        { label: '🚀 डिजिटल मार्केटिंग सेवा', action: 'marketing' },
        { label: '🎓 शिक्षण संस्था ERP', action: 'edu' },
        { label: '🏦 सहकारी बँक MIS', action: 'bank' },
        { label: '👥 कर्मचारी व HR सोल्यूशन', action: 'staff' },
        { label: '💼 व्यवसाय सोल्यूशन्स', action: 'smb' },
        { label: '💬 थेट व्हॉट्सॲपवर बोला', action: 'wa' },
        { label: '✉️ सल्लामसलत / कोटेशन', action: 'contact' }
      ];
    } else if (lang === 'hi') {
      text = `नमस्ते! 🙏 **DataSpire** के स्मार्ट असिस्टेंट में आपका स्वागत है। हम शैक्षणिक संस्थानों, सहकारी बैंकों, स्टाफ प्रबंधन, **डिजिटल मार्केटिंग और व्यावसायिक विकास** के लिए व्यापक समाधान प्रदान करते हैं। आज मैं आपकी क्या सहायता कर सकता हूँ?`;
      options = [
        { label: '🚀 डिजिटल मार्केटिंग सेवाएं', action: 'marketing' },
        { label: '🎓 शिक्षा संस्थान ERP', action: 'edu' },
        { label: '🏦 सहकारी बैंक MIS', action: 'bank' },
        { label: '👥 स्टाफ और HR समाधान', action: 'staff' },
        { label: '💼 लघु व मध्यम व्यवसाय', action: 'smb' },
        { label: '💬 व्हाट्सएप पर चैट करें', action: 'wa' },
        { label: '✉️ परामर्श / कोटेशन', action: 'contact' }
      ];
    } else {
      text = `Hello! 👋 Welcome to **DataSpire**. We engineer specialized software, **high-impact digital marketing & growth strategies**, analytics, and cloud solutions for educational institutions, cooperative banks, staff HR teams, and growing enterprises. How can I assist you today?`;
      options = [
        { label: '🚀 Digital Marketing Services', action: 'marketing' },
        { label: '🎓 Education ERP Suite', action: 'edu' },
        { label: '🏦 Co-op Banking MIS', action: 'bank' },
        { label: '👥 Staff & HR Management', action: 'staff' },
        { label: '💼 Small Business Solutions', action: 'smb' },
        { label: '💬 Chat on WhatsApp', action: 'wa' },
        { label: '✉️ Schedule Consultation', action: 'contact' }
      ];
    }

    this.messages.push({
      id: 'welcome',
      sender: 'bot',
      text: text,
      time: this.getCurrentTime(),
      options: options
    });
  }

  sendMessage(e?: Event): void {
    if (e) {
      e.preventDefault();
    }
    const input = this.userInput.trim();
    if (!input || this.isTyping) return;

    // Add user message
    this.messages.push({
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      time: this.getCurrentTime()
    });

    this.userInput = '';
    this.isTyping = true;

    // Process intelligence response with subtle simulated delay
    setTimeout(() => {
      this.generateBotResponse(input.toLowerCase());
      this.isTyping = false;
    }, 500);
  }

  handleQuickAction(action: string): void {
    const lang = this.ts.currentLang();
    let queryText = '';

    switch (action) {
      case 'marketing':
        queryText = lang === 'mr' ? '🚀 डिजिटल मार्केटिंग सेवा' : (lang === 'hi' ? '🚀 डिजिटल मार्केटिंग सेवाएं' : '🚀 Digital Marketing Services');
        break;
      case 'seo':
        queryText = lang === 'mr' ? '🔍 SEO आणि सर्च इंजिन रँकिंग' : (lang === 'hi' ? '🔍 SEO और गूगल रैंकिंग' : '🔍 Search Engine Optimization (SEO)');
        break;
      case 'ppc':
        queryText = lang === 'mr' ? '🎯 PPC आणि परफॉर्मन्स जाहिराती' : (lang === 'hi' ? '🎯 PPC और गूगल विज्ञापन' : '🎯 PPC & Paid Advertising');
        break;
      case 'smm':
        queryText = lang === 'mr' ? '📱 सोशल मीडिया मार्केटिंग' : (lang === 'hi' ? '📱 सोशल मीडिया मार्केटिंग' : '📱 Social Media Marketing');
        break;
      case 'admissions':
        queryText = lang === 'mr' ? '🎓 कॉलेज व शाळा ॲडमिशन्स कॅम्पेन' : (lang === 'hi' ? '🎓 कॉलेज और स्कूल एडमिशन अभियान' : '🎓 Educational Admissions Marketing');
        break;
      case 'edu':
        queryText = lang === 'mr' ? 'शिक्षण संस्था सोल्यूशन' : (lang === 'hi' ? 'शिक्षा संस्थान समाधान' : 'Education Solutions');
        break;
      case 'bank':
        queryText = lang === 'mr' ? 'सहकारी बँक सोल्यूशन' : (lang === 'hi' ? 'सहकारी बैंक समाधान' : 'Cooperative Banking MIS');
        break;
      case 'staff':
        queryText = lang === 'mr' ? 'कर्मचारी व HR व्यवस्थापन' : (lang === 'hi' ? 'स्टाफ व HR प्रबंधन' : 'Staff & HR Management');
        break;
      case 'smb':
        queryText = lang === 'mr' ? 'व्यवसाय सोल्यूशन्स' : (lang === 'hi' ? 'व्यवसाय समाधान' : 'Small Business Solutions');
        break;
      case 'wa':
        queryText = lang === 'mr' ? 'व्हॉट्सॲप संपर्क' : (lang === 'hi' ? 'व्हाट्सएप संपर्क' : 'WhatsApp Support');
        break;
      case 'contact':
        queryText = lang === 'mr' ? 'सल्लामसलत व चौकशी' : (lang === 'hi' ? 'परामर्श और पूछताछ' : 'Schedule Consultation');
        break;
      case 'careers':
        queryText = lang === 'mr' ? 'करिअर आणि नोकऱ्या' : (lang === 'hi' ? 'करियर और नौकरियां' : 'Careers & Jobs');
        break;
      default:
        queryText = action;
    }

    this.userInput = queryText;
    this.sendMessage();
  }

  private generateBotResponse(input: string): void {
    const lang = this.ts.currentLang();
    let reply = '';
    let linkUrl = '';
    let routePath = '';
    let fragment = '';
    let linkLabel = '';
    let isWa = false;
    let options: { label: string; action: string }[] | undefined = undefined;

    // 1. Specific: SEO (Search Engine Optimization)
    if (input.includes('seo') || input.includes('एसईओ') || input.includes('search engine') || input.includes('google rank') || input.includes('keyword') || input.includes('रँकिंग') || input.includes('रैंकिंग')) {
      if (lang === 'mr') {
        reply = `🔍 **डेटास्पायर सर्च इंजिन ऑप्टिमायझेशन (SEO)**:\nगुगल सर्चवर अव्वल क्रमांक मिळवा आणि थेट संभाव्य ग्राहक व विद्यार्थी आकर्षित करा:\n\n• **टेक्निकल SEO ऑडिट**: वेबसाइटचा वेग, मोबाईल सुसंगतता, क्रॉलिंग आणि स्कीमा मार्कअप\n• **कीवर्ड स्ट्रॅटेजी**: तुमच्या उद्योगातील सर्वाधिक शोधले जाणारे व्यावसायिक कीवर्ड्स\n• **स्थानिक Google Business SEO**: गुगल मॅप्सवर अव्वल स्थान आणि स्थानिक ग्राहकांचा शोध\n• **पारदर्शक अहवाल**: मासिक कीवर्ड रँकिंग आणि सेंद्रिय ट्रॅफिक वाढ अहवाल.`;
        linkLabel = 'SEO सेवा आणि तपशील पहा';
      } else if (lang === 'hi') {
        reply = `🔍 **डेटास्पायर सर्च इंजन ऑप्टिमाइजेशन (SEO)**:\nगूगल पर शीर्ष स्थान प्राप्त करें, लक्षित ऑर्गेनिक ट्रैफ़िक आकर्षित करें और प्रतिस्पर्धियों से आगे रहें:\n\n• **तकनीकी एसईओ ऑडिट**: वेबसाइट गति, मोबाइल अनुकूलता, क्रॉलिंग और संरचित डेटा स्कीमा\n• **कीवर्ड अनुसंधान**: उच्च-रूपांतरण वाले कीवर्ड और प्रतिस्पर्धी अंतर विश्लेषण\n• **लोकल एसईओ और गूगल मैप्स**: स्थानीय व्यापार खोज और गूगल बिजनेस प्रोफाइल ऑप्टिमाइजेशन\n• **पारदर्शी मासिक रिपोर्टिंग**: कीवर्ड रैंकिंग प्रगति और ऑर्गेनिक ट्रैफिक विश्लेषण।`;
        linkLabel = 'विस्तृत SEO समाधान देखें';
      } else {
        reply = `🔍 **DataSpire Search Engine Optimization (SEO)**:\nRank higher on Google, capture organic high-intent inquiries, and outrank competitors sustainably:\n\n• **Comprehensive Technical Audit**: Core Web Vitals, site speed, crawlability & schema markup\n• **Strategic Keyword Research**: Commercial-intent keyword mapping & competitive gap analysis\n• **Local SEO Dominance**: Google Business Profile ranking & local map pack visibility\n• **Transparent Reporting**: Monthly ranking movements, organic impression gains & conversion tracking.`;
        linkLabel = 'View SEO Capabilities & Deliverables';
      }
      routePath = '/services';
      fragment = 'seo-services';
      options = [
        { label: '🎯 PPC & Paid Ads', action: 'ppc' },
        { label: '📱 Social Media Marketing', action: 'smm' },
        { label: '💬 WhatsApp SEO Audit', action: 'wa' },
        { label: '✉️ Get Free SEO Quote', action: 'contact' }
      ];
    }
    // 2. Specific: PPC & Performance Ads
    else if (input.includes('ppc') || input.includes('pay-per-click') || input.includes('google ad') || input.includes('meta ad') || input.includes('paid ad') || input.includes('जाहिरात') || input.includes('विज्ञापन')) {
      if (lang === 'mr') {
        reply = `🎯 **डेटास्पायर PPC आणि परफॉर्मन्स जाहिराती**:\nकमीत कमी खर्चात जास्तीत जास्त थेट ग्राहक व चौकशी लीड्स मिळवा:\n\n• **गुगल सर्च व डिस्प्ले ॲड्स**: जेव्हा ग्राहक तुमच्या सेवा शोधतात, तेव्हा त्यांना थेट तुमची जाहिरात दिसते\n• **मेटा ॲड्स (इन्स्टाग्राम व फेसबुक)**: अचूक वयोगट, क्षेत्र आणि आवडीनुसार टार्गेटेड मोहिमा\n• **हाय-कन्व्हर्जन लँडिंग पेजेस**: येणाऱ्या प्रत्येक क्लिकचे फोन कॉल किंवा लीडमध्ये रूपांतर\n• **किमान खर्च (CPL Optimization)**: सातत्यपूर्ण A/B टेस्टिंगद्वारे प्रति लीड खर्च कमी करणे.`;
        linkLabel = 'PPC आणि जाहिरात सोल्यूशन्स पहा';
      } else if (lang === 'hi') {
        reply = `🎯 **डेटास्पायर PPC और परफॉर्मेंस विज्ञापन**:\nसटीक टार्गेटिंग के साथ अपने विज्ञापन बजट (ROAS) का अधिकतम लाभ उठाएं और वास्तविक लीड्स प्राप्त करें:\n\n• **गूगल सर्च और डिस्प्ले विज्ञापन**: जब ग्राहक आपकी सेवाओं की तलाश कर रहे हों, तब उन्हें सीधे जोड़ें\n• **मेटा विज्ञापन (इंस्टाग्राम और फेसबुक)**: जनसांख्यिकी और रुचियों के आधार पर लक्षित ऑडियंस अभियान\n• **उच्च-रूपांतरण लैंडिंग पेज**: आगंतुकों को पूछताछ और ग्राहकों में बदलने हेतु विशेष पेज डिजाइन\n• **लागत में कमी (CPL)**: निरंतर A/B टेस्टिंग और बिडिंग ऑप्टिमाइजेशन द्वारा प्रति लीड न्यूनतम लागत।`;
        linkLabel = 'PPC और विज्ञापन समाधान देखें';
      } else {
        reply = `🎯 **DataSpire PPC & Performance Advertising**:\nMaximize return on ad spend (ROAS) and generate high-intent inquiries with precision targeting:\n\n• **Google Search & Display Network**: Capture immediate buyer intent when clients search for your services\n• **Meta Ads (Instagram & Facebook)**: Hyper-targeted demographic, interest & retargeting campaigns\n• **High-Converting Landing Pages**: Persuasive copywriting and layout optimized to convert clicks to calls & leads\n• **CPL Optimization**: Continuous A/B testing for keywords, creatives, and bidding to lower cost-per-lead.`;
        linkLabel = 'Explore PPC & Paid Advertising';
      }
      routePath = '/services';
      fragment = 'ppc-advertising';
      options = [
        { label: '🔍 SEO Services', action: 'seo' },
        { label: '📱 Social Media', action: 'smm' },
        { label: '💬 WhatsApp PPC Strategy', action: 'wa' },
        { label: '✉️ Request Ad Proposal', action: 'contact' }
      ];
    }
    // 3. Specific: Social Media Marketing
    else if (input.includes('social') || input.includes('smm') || input.includes('instagram') || input.includes('facebook') || input.includes('linkedin') || input.includes('सोशल')) {
      if (lang === 'mr') {
        reply = `📱 **डेटास्पायर सोशल मीडिया मार्केटिंग**:\nएक मजबूत डिजिटल ब्रँड ओळखा निर्माण करा आणि प्रेक्षकांशी सातत्याने कनेक्ट राहा:\n\n• **प्लॅटफॉर्म रणनीती**: लिंक्डइन (B2B/संस्था), इन्स्टाग्राम आणि फेसबुकसाठी स्वतंत्र नियोजन\n• **आकर्षक क्रिएटिव्ह व डिझाइन**: दर्जेदार ब्रँडेड पोस्ट्स, इन्फोग्राफिक्स आणि व्हिडिओ कंटेंन्ट\n• **कंटेंट कॅलेंडर**: वेळेवर व नियमित पोस्टिंगचे व्यावसायिक नियोजन\n• **ऑडियन्स एंगेजमेंट**: प्रेक्षकांच्या टिप्पण्या व थेट मेसेजचे जलद व्यवस्थापन.`;
        linkLabel = 'सोशल मीडिया मार्केटिंग पहा';
      } else if (lang === 'hi') {
        reply = `📱 **डेटास्पायर सोशल मीडिया मार्केटिंग**:\nएक प्रभावशाली ब्रांड पहचान बनाएं, अपने दर्शकों से जुड़ें और सोशल मीडिया पर विश्वास अर्जित करें:\n\n• **मंच-विशिष्ट रणनीति**: लिंक्डइन (B2B), इंस्टाग्राम और फेसबुक के लिए लक्षित योजना\n• **रचनात्मक डिजाइन व पोस्ट्स**: प्रीमियम ब्रांडेड ग्राफिक्स, इन्फोग्राफिक्स और वीडियो पोस्ट्स\n• **कंटेंट कैलेंडर**: नियमित और मूल्यवान सामग्री का पूर्व-नियोजित प्रकाशन\n• **ऑडियंस एंगेजमेंट**: टिप्पणियों का त्वरित उत्तर, संदेश प्रबंधन और ऑनलाइन प्रतिष्ठा।`;
        linkLabel = 'सोशल मीडिया मार्केटिंग देखें';
      } else {
        reply = `📱 **DataSpire Social Media Marketing**:\nBuild a memorable brand presence, engage your audience, and drive trust across top platforms:\n\n• **Platform Strategy**: Tailored campaigns for LinkedIn (B2B), Instagram (visual & youth), and Facebook\n• **Creative Visuals & Design**: Premium branded post creatives, carousels, infographics, and reels\n• **Editorial Calendar**: Consistent, high-value publishing aligned with your organizational milestones\n• **Community Management**: Active comment moderation, direct inquiry nurturing, and reputation management.`;
        linkLabel = 'View Social Media Services';
      }
      routePath = '/services';
      fragment = 'social-media-marketing';
      options = [
        { label: '🔍 SEO Services', action: 'seo' },
        { label: '🎯 PPC Advertising', action: 'ppc' },
        { label: '💬 WhatsApp Chat', action: 'wa' },
        { label: '✉️ Get Social Media Plan', action: 'contact' }
      ];
    }
    // 4. Specific: Educational Admissions Marketing
    else if (input.includes('admission') || input.includes('enrollment') || input.includes('student lead') || input.includes('प्रवेश मोहीम') || input.includes('प्रवेश अभियान') || input.includes('दाखला')) {
      if (lang === 'mr') {
        reply = `🎓 **डेटास्पायर ॲडमिशन्स आणि विद्यार्थी प्रवेश मार्केटिंग**:\nशाळा, महाविद्यालये, पदवी संस्था आणि कोचिंग क्लासेससाठी विशेष मोहीम:\n\n• **प्रवेश वाढ मोहीम**: ॲडमिशन्सच्या मोसमात पालक आणि विद्यार्थ्यांच्या थेट चौकशी मिळवणे\n• **मल्टी-चॅनल रीच**: कोर्सेससाठी गुगल सर्च ॲड्स + इन्स्टाग्राम जागरूकता + व्हॉट्सॲप थेट संवाद\n• **थेट लीड सिंक**: विद्यार्थ्यांची माहिती थेट तुमच्या ॲडमिशन डेस्क किंवा डेटास्पायर ERP मध्ये नोंदवणे\n• **संस्थेची प्रतिष्ठा**: कॉलेजचे निकाल, कॅम्पस सुविधा आणि प्लेसमेंट यश लोकांपर्यंत पोहोचवणे.`;
        linkLabel = 'शैक्षणिक मार्केटिंग तपशील पहा';
      } else if (lang === 'hi') {
        reply = `🎓 **डेटास्पायर एडमिशन और छात्र नामांकन मार्केटिंग**:\nस्कूलों, कॉलेजों, डिग्री संस्थानों और अकादमियों के लिए विशेष समाधान:\n\n• **एडमिशन एनरोलमेंट फनल**: प्रवेश सत्र के दौरान लक्षित छात्र/अभिभावक लीड्स जुटाने वाले अभियान\n• **मल्टी-चैनल पहुंच**: पाठ्यक्रमों हेतु गूगल सर्च विज्ञापन + इंस्टाग्राम अभियान + व्हाट्सएप लीड्स\n• **त्वरित लीड सिंक**: छात्र पूछताछ सीधे आपके एडमिशन विभाग या डेटास्पायर ईआरपी में दर्ज\n• **संस्थागत प्रतिष्ठा निर्माण**: परिसर सुविधाएं, परीक्षा परिणाम और प्लेसमेंट रिकॉर्ड्स का प्रभावी प्रदर्शन।`;
        linkLabel = 'एजुकेशनल मार्केटिंग समाधान देखें';
      } else {
        reply = `🎓 **DataSpire Admissions & Student Enrollment Marketing**:\nTailored for schools, colleges, professional institutes, and coaching academies:\n\n• **Admissions Enrollment Funnels**: Targeted lead capture campaigns running ahead of and during admission seasons\n• **Multi-Channel Reach**: Google Search Ads for specific courses + Instagram awareness campaigns + WhatsApp capture\n• **Instant Lead Sync**: Direct routing of student and parent inquiries into your admissions cell or DataSpire ERP\n• **Institutional Reputation**: Showcasing campus facilities, academic rankings, alumni success & placement records.`;
        linkLabel = 'Explore Educational Marketing';
      }
      routePath = '/industries';
      fragment = 'digital-marketing-industries';
      options = [
        { label: '🎓 Education ERP Suite', action: 'edu' },
        { label: '🔍 SEO Services', action: 'seo' },
        { label: '💬 WhatsApp Admissions Demo', action: 'wa' },
        { label: '✉️ Contact Admissions Specialist', action: 'contact' }
      ];
    }
    // 5. General Digital Marketing Services
    else if (input.includes('market') || input.includes('digital') || input.includes('lead') || input.includes('branding') || input.includes('growth') || input.includes('मार्केटिंग') || input.includes('डिजिटल') || input.includes('ब्रँडिंग') || input.includes('ब्रांडिंग') || input.includes('लीड')) {
      if (lang === 'mr') {
        reply = `🚀 **डेटास्पायर डिजिटल मार्केटिंग व व्यवसाय वाढीच्या सेवा**:\nआम्ही शाळा, महाविद्यालये, सहकारी बँका, व्यावसायिक आणि संस्थांसाठी संपूर्ण डिजिटल मार्केटिंग सोल्यूशन्स देतो:\n\n• **सर्च इंजिन ऑप्टिमायझेशन (SEO)**: गुगल रँकिंग, तांत्रिक ऑडिट आणि स्थानिक व्यवसाय शोध\n• **PPC आणि टार्गेटेड जाहिराती**: गुगल सर्च, युट्यूब आणि मेटा (इन्स्टाग्राम/फेसबुक) द्वारे थेट लीड्स\n• **सोशल मीडिया मार्केटिंग**: ब्रँड ओळख, आकर्षक डिझाईन्स आणि सक्रिय प्रेक्षक संवाद\n• **कॉलेज व शाळा ॲडमिशन कॅम्पेन्स**: नवीन प्रवेशांसाठी विद्यार्थी व पालकांच्या चौकशी मोहिमा\n• **ईमेल मार्केटिंग आणि ऑटोमेशन**: स्वयंचलित ईमेल फनेल्स आणि थेट ग्राहक संबंध.\n\n📊 सर्व मोहिमांसाठी सविस्तर ॲनालिटिक्स, लीड ट्रॅकिंग आणि पारदर्शक मासिक कामगिरी अहवाल!`;
        linkLabel = 'संपूर्ण डिजिटल मार्केटिंग सेवा पहा';
      } else if (lang === 'hi') {
        reply = `🚀 **डेटास्पायर डिजिटल मार्केटिंग और व्यावसायिक विकास सेवाएं**:\nहम शैक्षणिक संस्थानों, सहकारी बैंकों, व्यवसायों और आधुनिक उद्यमों के लिए व्यापक डिजिटल समाधान प्रदान करते हैं:\n\n• **सर्च इंजन ऑप्टिमाइजेशन (SEO)**: तकनीकी ऑडिट, उच्च-प्रभावी कीवर्ड रैंकिंग और गूगल लोकल सर्च में शीर्ष दृश्यता\n• **PPC और परफॉर्मेंस विज्ञापन**: उच्च रूपांतरण वाले गूगल सर्च और मेटा (Instagram/Facebook) लीड जनरेशन विज्ञापन\n• **सोशल मीडिया मार्केटिंग**: प्रभावशाली ब्रांडिंग, आकर्षक रचनात्मक डिजाइन और लिंक्डइन व इंस्टाग्राम पर एंगेजमेंट\n• **कॉलेज व स्कूल एडमिशन अभियान**: नए शैक्षणिक सत्रों में छात्र प्रवेश बढ़ाने हेतु विशेष डिजिटल कैंपेन\n• **ईमेल मार्केटिंग और ऑटोमेशन**: लीड नर्चरिंग, स्वचालित ड्रिप अभियान और ग्राहक संपर्क।\n\n📊 सभी अभियानों में वास्तविक समय ट्रैकिंग और पारदर्शी मासिक आरओआई रिपोर्ट शामिल है!`;
        linkLabel = 'विस्तृत डिजिटल मार्केटिंग सेवाएं देखें';
      } else {
        reply = `🚀 **DataSpire Digital Marketing & Growth Solutions**:\nWe engineer data-driven digital growth strategies for educational institutions, cooperative banks, SMBs, and modern enterprises:\n\n• **Search Engine Optimization (SEO)**: Technical audits, commercial-intent keyword ranking & Google Business local presence\n• **PPC & Performance Advertising**: High-ROI Google Search & Meta (Instagram/Facebook) lead generation campaigns\n• **Social Media Marketing**: Brand storytelling, creative visual design & active audience engagement on LinkedIn & Instagram\n• **College & School Admissions**: High-conversion student acquisition campaigns tailored to academic enrollment cycles\n• **Email & Marketing Automation**: Nurture funnels, drip campaigns & automated prospect communication.\n\n📈 All campaigns feature real-time attribution, conversion tracking & transparent monthly ROI reporting!`;
        linkLabel = 'Explore Digital Marketing Services';
      }
      routePath = '/services';
      fragment = 'digital-marketing';
      options = [
        { label: '🔍 SEO & Rankings', action: 'seo' },
        { label: '🎯 PPC & Lead Ads', action: 'ppc' },
        { label: '📱 Social Media', action: 'smm' },
        { label: '🎓 Admissions Campaigns', action: 'admissions' },
        { label: '💬 WhatsApp Strategy Call', action: 'wa' },
        { label: '✉️ Get Custom Proposal', action: 'contact' }
      ];
    }
    // 6. Education ERP
    else if (input.includes('edu') || input.includes('school') || input.includes('college') || input.includes('शाळा') || input.includes('शिक्षण') || input.includes('कॉलेज') || input.includes('स्कूल')) {
      if (lang === 'mr') {
        reply = `🎓 **डेटास्पायर एज्युकेशन मॅनेजमेंट सूट**:\n• संपूर्ण विद्यार्थी जीवनचक्र (प्रवेश ते पदवी)\n• स्वयंचलित फी संकलन व डिजिटल पावत्या\n• बायोमेट्रिक व आरआयडी हजेरी\n• परीक्षा गुणपत्रिका व विद्यापीठ अहवाल.\n\nसंस्थेच्या गरजेनुसार १००% कस्टमाइझ करता येते.`;
        linkLabel = 'संपूर्ण एज्युकेशन सोल्यूशन पहा';
      } else if (lang === 'hi') {
        reply = `🎓 **डेटास्पायर एजुकेशन मैनेजमेंट सूट**:\n• संपूर्ण छात्र जीवनचक्र (प्रवेश से डिग्री)\n• स्वचालित फीस संग्रह व रसीदें\n• बायोमेट्रिक और RFID उपस्थिति\n• परीक्षा परिणाम व बोर्ड/विश्वविद्यालय रिपोर्टिंग।\n\nआपकी संस्था के नियमों अनुसार १००% अनुकूलनीय।`;
        linkLabel = 'विस्तृत एजुकेशन समाधान देखें';
      } else {
        reply = `🎓 **DataSpire Education Management Suite**:\n• Complete student lifecycle (admissions to alumni)\n• Automated fee collections & instant receipts\n• Biometric/RFID attendance sync\n• Examination scorecards & regulatory reports.\n\nBuilt modularly and 100% customizable to your university/college rules.`;
        linkLabel = 'View Education Architecture';
      }
      routePath = '/solutions';
      fragment = 'education-management';
      options = [
        { label: '🚀 Admissions Marketing', action: 'admissions' },
        { label: '👥 Staff & HR Suite', action: 'staff' },
        { label: '💬 WhatsApp Demo', action: 'wa' },
        { label: '✉️ Contact Education Team', action: 'contact' }
      ];
    }
    // 7. Banking
    else if (input.includes('bank') || input.includes('coop') || input.includes('बँक') || input.includes('बँकिंग') || input.includes('सहकारी') || input.includes('पतसंस्था') || input.includes('बैंक') || input.includes('सहकार')) {
      if (lang === 'mr') {
        reply = `🏦 **मल्टी-स्टेट व नागरी सहकारी बँक MIS सोल्यूशन**:\n• दैनंदिन शाखा-वार ठेव व कर्ज अहवाल\n• स्वयंचलित एनपीए व तरलता मॉनिटरिंग\n• ऑडीट-रेडी ट्रान्झॅक्शन लॉग्स\n• संचालक मंडळासाठी रिअल-टाइम व्हिज्युअल डॅशबोर्ड.`;
        linkLabel = 'बँकिंग सोल्यूशन तपशील पहा';
      } else if (lang === 'hi') {
        reply = `🏦 **मल्टी-स्टेट और सहकारी बैंक MIS समाधान**:\n• दैनिक शाखा-वार जमा और ऋण रिपोर्टिंग\n• स्वचालित एनपीए और तरलता निगरानी\n• ऑडिट-तैयार सुरक्षा लॉग\n• निदेशक मंडल हेतु वास्तविक समय विजुअल डैशबोर्ड।`;
        linkLabel = 'बैंकिंग समाधान विवरण देखें';
      } else {
        reply = `🏦 **Cooperative Banking MIS & Analytics Platform**:\n• Daily branch-wise deposit & loan consolidation\n• Real-time NPA tracking & liquidity health dashboards\n• Audit-ready immutable transaction logs\n• Executive scorecards for Chairman & Directors.`;
        linkLabel = 'View Banking Capabilities';
      }
      routePath = '/solutions';
      fragment = 'cooperative-banking-solutions';
      options = [
        { label: '💬 Talk to Banking Architect', action: 'wa' },
        { label: '✉️ Send Inquiry', action: 'contact' }
      ];
    }
    // 8. Staff / HR
    else if (input.includes('staff') || input.includes('hr') || input.includes('attendance') || input.includes('payroll') || input.includes('कर्मचारी') || input.includes('हजेरी') || input.includes('पगार') || input.includes('उपस्थिति') || input.includes('वेतन')) {
      if (lang === 'mr') {
        reply = `👥 **स्टाफ आणि एचआर मॅनेजमेंट सोल्यूशन**:\n• बायोमेट्रिक डिव्हाइस सिंक (फिंगरप्रिंट/चेहरा ओळख)\n• रजा मंजुरी व डिजिटल मस्टर\n• एक-क्लिक पगार स्लिप व वेतन अहवाल\n• शिक्षक व शिक्षकेतर कर्मचाऱ्यांसाठी स्वतंत्र प्रोफाईल.`;
        linkLabel = 'स्टाफ सोल्यूशन पहा';
      } else if (lang === 'hi') {
        reply = `👥 **स्टाफ और एचआर प्रबंधन समाधान**:\n• बायोमेट्रिक डिवाइस सिंक (फिंगरप्रिंट/चेहरा पहचान)\n• अवकाश अनुमोदन और डिजिटल मस्टर\n• एक-क्लिक वेतन पर्ची और पेरोल गणना\n• शिक्षक और गैर-शिक्षण कर्मचारियों हेतु अलग प्रोफाइल।`;
        linkLabel = 'स्टाफ समाधान देखें';
      } else {
        reply = `👥 **Staff & HR Management Suite**:\n• Seamless biometric device synchronization\n• Multi-tier leave approval hierarchies\n• One-click salary computation & automated payslips\n• Service records & document vaults for teaching/non-teaching staff.`;
        linkLabel = 'Explore Staff HR Solution';
      }
      routePath = '/solutions';
      fragment = 'staff-hr-management';
      options = [
        { label: '💬 Request Demo', action: 'wa' },
        { label: '✉️ Contact Team', action: 'contact' }
      ];
    }
    // 9. WhatsApp / Phone
    else if (input.includes('wa') || input.includes('whatsapp') || input.includes('phone') || input.includes('call') || input.includes('number') || input.includes('नंबर') || input.includes('फोन')) {
      reply = lang === 'mr'
        ? `💬 तुम्ही आमच्याशी थेट व्हॉट्सॲपवर **+91 86689 31557** वर चॅट करू शकता. आम्ही त्वरित प्रतिसाद देतो!`
        : (lang === 'hi' 
            ? `💬 आप सीधे व्हाट्सएप पर **+91 86689 31557** पर हमसे चैट कर सकते हैं। हमारी टीम तुरंत सहायता करेगी!`
            : `💬 You can connect with our solutions team directly on WhatsApp at **+91 86689 31557**. We typically reply in minutes!`);
      linkUrl = `https://api.whatsapp.com/send?phone=${this.company.contact.whatsappNumber}&text=Hello%20DataSpire%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
      linkLabel = lang === 'mr' ? 'व्हॉट्सॲप उघडा' : (lang === 'hi' ? 'व्हाट्सएप खोलें' : 'Open WhatsApp (+91 86689 31557)');
      isWa = true;
    }
    // 10. Email / Contact / Address
    else if (input.includes('mail') || input.includes('email') || input.includes('contact') || input.includes('address') || input.includes('location') || input.includes('पत्ता') || input.includes('ईमेल') || input.includes('संपर्क') || input.includes('पता')) {
      reply = lang === 'mr'
        ? `📍 **डेटास्पायर संपर्क माहिती**:\n• **ई-मेल:** dataspirepune@gmail.com\n• **फोन / व्हॉट्सॲप:** +91 86689 31557\n• **पत्ता:** पुणे, महाराष्ट्र, भारत.`
        : (lang === 'hi'
            ? `📍 **डेटास्पायर संपर्क जानकारी**:\n• **ईमेल:** dataspirepune@gmail.com\n• **फोन / व्हाट्सएप:** +91 86689 31557\n• **स्थान:** पुणे, महाराष्ट्र, भारत।`
            : `📍 **DataSpire Contact Info**:\n• **Email:** dataspirepune@gmail.com\n• **Phone / WhatsApp:** +91 86689 31557\n• **Headquarters:** Pune, Maharashtra, India.`);
      routePath = '/contact';
      linkLabel = lang === 'mr' ? 'संपर्क फॉर्म भरा' : (lang === 'hi' ? 'संपर्क फॉर्म खोलें' : 'Open Contact Page');
      options = [
        { label: '🚀 Digital Marketing', action: 'marketing' },
        { label: '💬 Chat on WhatsApp', action: 'wa' }
      ];
    }
    // 11. Careers / Jobs
    else if (input.includes('job') || input.includes('career') || input.includes('hiring') || input.includes('opening') || input.includes('नोकरी') || input.includes('करिअर') || input.includes('भर्ती')) {
      reply = lang === 'mr'
        ? `💼 **डेटास्पायर करिअर अपडेट**:\nसध्या आमच्याकडे कोणतीही नवीन पदभरती किंवा ओपनिंग उपलब्ध नाही.\n\nभविष्यातील संधींसाठी आपण आपला बायोडाटा **careers@dataspire.in** वर पाठवू शकता.`
        : (lang === 'hi'
            ? `💼 **डेटास्पायर करियर अपडेट**:\nवर्तमान में हमारे यहाँ कोई सक्रिय रिक्त पद या भर्ती उपलब्ध नहीं है।\n\nभविष्य के अवसरों के लिए आप अपना बायोडाटा **careers@dataspire.in** पर भेज सकते हैं।`
            : `💼 **DataSpire Careers Update**:\nThere are currently no active openings or hirings at this time.\n\nHowever, you are welcome to send your resume for future opportunities to **careers@dataspire.in**.`);
      routePath = '/careers';
      linkLabel = lang === 'mr' ? 'करिअर पेज पहा' : (lang === 'hi' ? 'करियर पेज देखें' : 'View Careers Page');
    }
    // 12. Default fallback response
    else {
      if (lang === 'mr') {
        reply = `तुमच्या प्रश्नाबद्दल धन्यवाद! डेटास्पायर तुमच्या गरजेनुसार खास कस्टमाइझ सॉफ्टवेअर, **डिजिटल मार्केटिंग व व्यवसाय वाढ**, डेटा ॲनालिटिक्स आणि क्लाउड ॲप्स तयार करते.\n\nअधिक माहितीसाठी खालील पर्याय निवडा किंवा थेट **+91 86689 31557** वर व्हॉट्सॲप करा:`;
      } else if (lang === 'hi') {
        reply = `आपके प्रश्न के लिए धन्यवाद! डेटास्पायर आपकी आवश्यकताओं के अनुसार विशेष कस्टम सॉफ्टवेयर, **डिजिटल मार्केटिंग व विकास रणनीतियां**, डेटा एनालिटिक्स और क्लाउड ऐप्स प्रदान करता है।\n\nविस्तृत जानकारी हेतु नीचे दिए गए विकल्प चुनें या **+91 86689 31557** पर व्हाट्सएप करें:`;
      } else {
        reply = `Thank you for your question! DataSpire engineers tailored web software, **digital marketing & growth strategies**, data analytics platforms, and cloud infrastructure for education, cooperative banking, and growing businesses.\n\nSelect an option below or chat directly with our team:`;
      }
      options = [
        { label: '🚀 Digital Marketing', action: 'marketing' },
        { label: '🎓 Education ERP', action: 'edu' },
        { label: '🏦 Co-op Bank MIS', action: 'bank' },
        { label: '👥 Staff & HR Suite', action: 'staff' },
        { label: '💬 WhatsApp Support', action: 'wa' },
        { label: '✉️ Send Inquiry', action: 'contact' }
      ];
    }

    this.messages.push({
      id: Date.now().toString(),
      sender: 'bot',
      text: reply,
      time: this.getCurrentTime(),
      linkUrl: linkUrl,
      routePath: routePath,
      fragment: fragment,
      linkLabel: linkLabel,
      isWa: isWa,
      options: options
    });
  }

  formatMessage(text: string): string {
    // Bold parsing
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Bullet parsing
    formatted = formatted.replace(/\n•/g, '<br/>•');
    // Newline parsing
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  }

  getBotButtonLabel(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'डेटास्पायर असिस्टंट' : (lang === 'hi' ? 'डेटास्पायर सहायक' : 'DataSpire AI');
  }

  getBotHeaderTitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'डेटास्पायर स्मार्ट असिस्टंट' : (lang === 'hi' ? 'डेटास्पायर स्मार्ट सहायक' : 'DataSpire Smart Assistant');
  }

  getBotHeaderStatus(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'ऑनलाइन • त्वरित उत्तर मिळवा' : (lang === 'hi' ? 'ऑनलाइन • तत्काल उत्तर प्राप्त करें' : 'Online • Instant Answers');
  }

  getInputPlaceholder(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'मार्केटिंग, सोल्यूशन्स, बँकिंगबद्दल विचारा...' : (lang === 'hi' ? 'मार्केटिंग, समाधान, बैंकिंग के बारे में पूछें...' : 'Ask about marketing, SEO, banking, ERP...');
  }

  // Email Modal Localization Helpers
  getEmailModalBadge(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'थेट ईमेल संपर्क' : (lang === 'hi' ? 'सीधा ईमेल संपर्क' : 'Direct Email Connect');
  }

  getEmailModalTitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'डेटास्पायर टीमला ईमेल पाठवा' : (lang === 'hi' ? 'डेटास्पायर टीम को ईमेल भेजें' : 'Email DataSpire Team');
  }

  getEmailModalSubtitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' 
      ? 'सॉफ्टवेअर, डिजिटल मार्केटिंग किंवा कोटेशनसाठी खालील पर्यायांपैकी एक निवडा:' 
      : (lang === 'hi' 
          ? 'सॉफ्टवेयर, डिजिटल मार्केटिंग या कोटेशन हेतु पसंदीदा माध्यम चुनें:' 
          : 'Choose your preferred method to connect with our solutions and engineering team:');
  }

  getEmailLabelText(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'अधिकृत ईमेल पत्ता:' : (lang === 'hi' ? 'आधिकारिक ईमेल पता:' : 'Official Email:');
  }

  getCopyLabel(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'ईमेल कॉपी करा' : (lang === 'hi' ? 'ईमेल कॉपी करें' : 'Copy Email');
  }

  getCopiedLabel(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'कॉपी झाले!' : (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!');
  }

  getGmailTitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'Gmail (वेब) मध्ये उघडा' : (lang === 'hi' ? 'Gmail (वेब) में खोलें' : 'Open in Gmail (Web)');
  }

  getGmailDesc(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'ब्राउझरमध्ये थेट नवीन ईमेल तयार करा' : (lang === 'hi' ? 'बिना किसी ऐप के सीधे ब्राउज़र में लिखें' : 'Draft an inquiry directly in your web browser');
  }

  getMailClientTitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'डिफॉल्ट मेल ॲप उघडा' : (lang === 'hi' ? 'डिफ़ॉल्ट मेल ऐप खोलें' : 'Open Default Mail App');
  }

  getMailClientDesc(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'आउटलुक, ॲपल मेल किंवा फोनच्या ॲपद्वारे पाठवा' : (lang === 'hi' ? 'आउटलुक, ऐप्पल मेल या मोबाइल ऐप लॉन्च करें' : 'Launch Outlook, Apple Mail, or phone email client');
  }

  getContactFormTitle(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'वेबसाईट संपर्क फॉर्म भरा' : (lang === 'hi' ? 'वेबसाइट संपर्क फॉर्म भरें' : 'Send via Contact Form');
  }

  getContactFormDesc(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' ? 'वेबसाईटवरून ऑनलाइन संदेश आणि माहिती पाठवा' : (lang === 'hi' ? 'अपनी आवश्यकताएं सीधे वेबसाइट फॉर्म पर दर्ज करें' : 'Submit your project details online on our website');
  }

  getResponseNote(): string {
    const lang = this.ts.currentLang();
    return lang === 'mr' 
      ? '⚡ आम्ही साधारण २ ते ४ व्यावसायिक तासांत उत्तर देतो.' 
      : (lang === 'hi' 
          ? '⚡ हम आमतौर पर २ से ४ व्यावसायिक घंटों के भीतर उत्तर देते हैं।' 
          : '⚡ Typical response time: within 2 to 4 business hours.');
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }
}
