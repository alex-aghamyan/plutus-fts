import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICurrency } from '@fts-models';
import { userSettingsActions } from '@fts-store/user-settings';
import { Store } from '@ngrx/store';
import { SettingsStore } from './settings.store';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LetModule } from '@ngrx/component';

@Component({
  selector: 'fts-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTypographyModule,
    NzSelectModule,
    LetModule,
  ],
  templateUrl: './settings.component.html',
  styles: [
    `
      nz-select {
        width: 9.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SettingsStore],
})
export class SettingsComponent {
  readonly store = inject(Store);
  protected readonly settingsStore = inject(SettingsStore);

  loadCurrencyList(): void {
    this.settingsStore.loadCurrencyList();
  }

  setPreferredCurrency(currency: ICurrency) {
    this.store.dispatch(
      userSettingsActions.setUserSettings({
        settings: { preferredCurrency: currency },
      })
    );
  }

  currencyListTrackBy(index: number, currency: ICurrency): number {
    return currency.id;
  }

  compareFn(optionOne: ICurrency, optionTwo: ICurrency): boolean {
    return optionOne.id === optionTwo.id;
  }
}
