import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ChatbotWidgetComponent } from './shared/components/chatbot-widget/chatbot-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatbotWidgetComponent],
  template: `
    <div class="app-layout">
      <app-navbar></app-navbar>
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
      <app-chatbot-widget></app-chatbot-widget>
    </div>
  `,
  styles: [`
    .app-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .content-wrapper {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'DataSpire';

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Listen for navigation events and handle fragment smooth scrolling with active pulse
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          this.scrollToElement(fragment);
        }
      });
    });
  }

  private scrollToElement(fragment: string): void {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const headerOffset = 95;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Trigger active highlight pulse animation
        element.classList.remove('target-highlight-active');
        void element.offsetWidth;
        element.classList.add('target-highlight-active');

        setTimeout(() => {
          element.classList.remove('target-highlight-active');
        }, 3000);
      }
    }, 120);
  }
}
