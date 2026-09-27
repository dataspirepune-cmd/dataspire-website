import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly defaultTitle = 'DataSpire | Data, Technology & Digital Transformation';
  private readonly defaultDescription = 'DataSpire delivers data analytics, software development, cloud, automation, and digital transformation solutions for education, businesses, and cooperative banking organizations.';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  updateSeo(config: SeoConfig): void {
    const fullTitle = config.title ? `${config.title} | DataSpire` : this.defaultTitle;
    this.titleService.setTitle(fullTitle);

    const desc = config.description || this.defaultDescription;
    this.metaService.updateTag({ name: 'description', content: desc });
    
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph Tags
    this.metaService.updateTag({ property: 'og:title', content: config.ogTitle || fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.ogDescription || desc });
  }
}
