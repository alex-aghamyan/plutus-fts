import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fts-root',
  template: `<fts-layout></fts-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
