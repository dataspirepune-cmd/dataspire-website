import { Injectable, signal, computed, inject } from '@angular/core';
import { LanguageOption, SiteTranslation, SupportedLanguage } from '../shared/models/translation.models';
import { EN_TRANSLATION } from '../shared/data/translations/en.translation';
import { MR_TRANSLATION } from '../shared/data/translations/mr.translation';
import { HI_TRANSLATION } from '../shared/data/translations/hi.translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  readonly supportedLanguages: LanguageOption[] = [
    { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
    { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' },
    { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' }
  ];

  private readonly translations: Record<SupportedLanguage, SiteTranslation> = {
    en: EN_TRANSLATION,
    mr: MR_TRANSLATION,
    hi: HI_TRANSLATION
  };

  private readonly STORAGE_KEY = 'dataspire_language_pref';

  // Active language signal
  readonly currentLang = signal<SupportedLanguage>(this.getInitialLanguage());

  // Active translation computed signal
  readonly t = computed<SiteTranslation>(() => {
    const lang = this.currentLang();
    return this.translations[lang] || this.translations.en;
  });

  constructor() {
    // Set initial html lang attribute
    this.updateHtmlLang(this.currentLang());
  }

  setLanguage(lang: SupportedLanguage): void {
    if (this.translations[lang]) {
      this.currentLang.set(lang);
      this.updateHtmlLang(lang);
      try {
        localStorage.setItem(this.STORAGE_KEY, lang);
      } catch (e) {
        // localStorage might be unavailable in some private contexts
      }
    }
  }

  private getInitialLanguage(): SupportedLanguage {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY) as SupportedLanguage;
      if (saved && (saved === 'en' || saved === 'mr' || saved === 'hi')) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'en';
  }

  private updateHtmlLang(lang: SupportedLanguage): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }
}
