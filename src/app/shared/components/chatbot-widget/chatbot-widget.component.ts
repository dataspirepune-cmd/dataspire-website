import { Component, OnInit, inject, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
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
      <!-- 1. Floating Email Action -->
      <a [href]="'mailto:' + company.contact.email + '?subject=Inquiry%20from%20DataSpire%20Website'"
         class="float-action-btn email-float"
         [title]="ts.t().common.emailUs + ' (' + company.contact.email + ')'">
        <div class="float-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <span class="float-text">{{ ts.t().common.emailUs }}</span>
      </a>

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
            <div *ngIf="msg.linkUrl" class="msg-link-box">
              <a [href]="msg.linkUrl" [target]="msg.isWa ? '_blank' : '_self'" class="btn-msg-action" [class.wa-btn]="msg.isWa">
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
        <button (click)="handleQuickAction('edu')" class="shortcut-chip">🎓 Education</button>
        <button (click)="handleQuickAction('bank')" class="shortcut-chip">🏦 Co-op Bank</button>
        <button (click)="handleQuickAction('staff')" class="shortcut-chip">👥 Staff & HR</button>
        <button (click)="handleQuickAction('wa')" class="shortcut-chip">💬 WhatsApp</button>
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

  ngOnInit(): void {
    this.initWelcomeMessage();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
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

  private initWelcomeMessage(): void {
    const lang = this.ts.currentLang();
    let text = '';
    let options: { label: string; action: string }[] = [];

    if (lang === 'mr') {
      text = `नमस्कार! 🙏 **DataSpire** च्या स्मार्ट असिस्टंटमध्ये आपले स्वागत आहे. आम्ही शिक्षण संस्था, सहकारी बँका, कर्मचारी व्यवस्थापन आणि व्यवसायांसाठी आधुनिक सॉफ्टवेअर सोल्यूशन्स तयार करतो. आज मी तुम्हाला कशी मदत करू शकतो?`;
      options = [
        { label: '🎓 शिक्षण संस्था ERP', action: 'edu' },
        { label: '🏦 सहकारी बँक MIS', action: 'bank' },
        { label: '👥 कर्मचारी व HR सोल्यूशन', action: 'staff' },
        { label: '💼 व्यवसाय सोल्यूशन्स', action: 'smb' },
        { label: '💬 थेट व्हॉट्सॲपवर बोला', action: 'wa' },
        { label: '✉️ सल्लामसलत / कोटेशन', action: 'contact' }
      ];
    } else if (lang === 'hi') {
      text = `नमस्ते! 🙏 **DataSpire** के स्मार्ट असिस्टेंट में आपका स्वागत है। हम शैक्षणिक संस्थानों, सहकारी बैंकों, स्टाफ प्रबंधन और व्यवसायों के लिए डिजिटल समाधान प्रदान करते हैं। आज मैं आपकी क्या सहायता कर सकता हूँ?`;
      options = [
        { label: '🎓 शिक्षा संस्थान ERP', action: 'edu' },
        { label: '🏦 सहकारी बैंक MIS', action: 'bank' },
        { label: '👥 स्टाफ और HR समाधान', action: 'staff' },
        { label: '💼 लघु व मध्यम व्यवसाय', action: 'smb' },
        { label: '💬 व्हाट्सएप पर चैट करें', action: 'wa' },
        { label: '✉️ परामर्श / कोटेशन', action: 'contact' }
      ];
    } else {
      text = `Hello! 👋 Welcome to **DataSpire**. We engineer specialized software, analytics, and cloud transformation solutions for colleges, cooperative banks, staff HR teams, and growing enterprises. How can I assist you today?`;
      options = [
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
    }, 600);
  }

  handleQuickAction(action: string): void {
    const lang = this.ts.currentLang();
    let queryText = '';

    switch (action) {
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
    let linkLabel = '';
    let isWa = false;
    let options: { label: string; action: string }[] | undefined = undefined;

    // 1. Education
    if (input.includes('edu') || input.includes('school') || input.includes('college') || input.includes('शाळा') || input.includes('शिक्षण') || input.includes('कॉलेज') || input.includes('स्कूल')) {
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
      linkUrl = '/solutions#education-management';
      options = [
        { label: '💬 WhatsApp Demo', action: 'wa' },
        { label: '👥 Staff & HR Suite', action: 'staff' }
      ];
    }
    // 2. Banking
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
      linkUrl = '/solutions#cooperative-banking-solutions';
      options = [
        { label: '💬 Talk to Banking Architect', action: 'wa' },
        { label: '✉️ Send Inquiry', action: 'contact' }
      ];
    }
    // 3. Staff / HR
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
      linkUrl = '/solutions#staff-hr-management';
      options = [
        { label: '💬 Request Demo', action: 'wa' },
        { label: '✉️ Contact Team', action: 'contact' }
      ];
    }
    // 4. WhatsApp / Phone
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
    // 5. Email / Contact / Address
    else if (input.includes('mail') || input.includes('email') || input.includes('contact') || input.includes('address') || input.includes('location') || input.includes('पत्ता') || input.includes('ईमेल') || input.includes('संपर्क') || input.includes('पता')) {
      reply = lang === 'mr'
        ? `📍 **डेटास्पायर संपर्क माहिती**:\n• **ई-मेल:** dataspirepune@gmail.com\n• **फोन / व्हॉट्सॲप:** +91 86689 31557\n• **पत्ता:** पुणे, महाराष्ट्र, भारत.`
        : (lang === 'hi'
            ? `📍 **डेटास्पायर संपर्क जानकारी**:\n• **ईमेल:** dataspirepune@gmail.com\n• **फोन / व्हाट्सएप:** +91 86689 31557\n• **स्थान:** पुणे, महाराष्ट्र, भारत।`
            : `📍 **DataSpire Contact Info**:\n• **Email:** dataspirepune@gmail.com\n• **Phone / WhatsApp:** +91 86689 31557\n• **Headquarters:** Pune, Maharashtra, India.`);
      linkUrl = '/contact';
      linkLabel = lang === 'mr' ? 'संपर्क फॉर्म भरा' : (lang === 'hi' ? 'संपर्क फॉर्म खोलें' : 'Open Contact Page');
    }
    // 6. Careers / Jobs
    else if (input.includes('job') || input.includes('career') || input.includes('hiring') || input.includes('opening') || input.includes('नोकरी') || input.includes('करिअर') || input.includes('भर्ती')) {
      reply = lang === 'mr'
        ? `🚀 डेटास्पायरमध्ये Frontend, Backend, Data Analytics, QA आणि DevOps साठी पदे उपलब्ध आहेत! अर्ज करण्यासाठी आपला बायोडाटा **dataspirepune@gmail.com** वर पाठवा.`
        : (lang === 'hi'
            ? `🚀 डेटास्पायर में Frontend, Backend, Data Analytics, QA और DevOps पदों के लिए अवसर उपलब्ध हैं! आवेदन करने हेतु अपना रिज्यूमे **dataspirepune@gmail.com** पर भेजें।`
            : `🚀 We have active openings for Frontend Developers, Backend Engineers, Data Analysts, QA, and Cloud DevOps! Email your resume to **dataspirepune@gmail.com**.`);
      linkUrl = '/careers';
      linkLabel = lang === 'mr' ? 'उपलब्ध पदे पहा' : (lang === 'hi' ? 'खुले पद देखें' : 'View Open Roles');
    }
    // Default fallback response
    else {
      if (lang === 'mr') {
        reply = `तुमच्या प्रश्नाबद्दल धन्यवाद! डेटास्पायर तुमच्या संस्थेच्या गरजेनुसार खास कस्टमाइझ सॉफ्टवेअर, डेटा ॲनालिटिक्स आणि क्लाउड ॲप्स तयार करते.\n\nअधिक माहितीसाठी खालील पर्याय निवडा किंवा थेट **+91 86689 31557** वर व्हॉट्सॲप करा:`;
      } else if (lang === 'hi') {
        reply = `आपके प्रश्न के लिए धन्यवाद! डेटास्पायर आपकी संस्था की आवश्यकताओं के अनुसार विशेष कस्टम सॉफ्टवेयर, डेटा एनालिटिक्स और क्लाउड ऐप्स बनाता है।\n\nविस्तृत जानकारी हेतु नीचे दिए गए विकल्प चुनें या **+91 86689 31557** पर व्हाट्सएप करें:`;
      } else {
        reply = `Thank you for your question! DataSpire engineers tailored web software, data analytics platforms, and cloud infrastructure for education, cooperative banking, and growing businesses.\n\nSelect an option below or chat directly with our team:`;
      }
      options = [
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
    return lang === 'mr' ? 'येथे प्रश्न विचारा...' : (lang === 'hi' ? 'यहाँ प्रश्न पूछें...' : 'Ask about solutions, banking, ERP...');
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
