import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
  selector: 'fts-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `<fts-layout></fts-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
