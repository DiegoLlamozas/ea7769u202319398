import { Component,inject, signal } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
// import {Layout} from './shared/presentation/components/layout/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ea7769u202319398');

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
